<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

// use Goutte
use Goutte\Client;


class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //http://bilutv.com/danh-sach/phim-le.html
            $Client =  new Client(); // khởi tạo client
            $crawler  = $Client->request("GET","http://bilutv.com/danh-sach/phim-le.html"); // lấy thông tin search theo từ khóa 
                       
           $nodeValues=  $crawler->filter("div.block-film ul.list-film li ")->each(function ( $node, $i)
            {
                   
                                     
                    $arr[$i] = [
                     "tieude"    => $node->filter("a")->attr('title'),
                      "url"      => $node->filter("a")->attr('href'),
                      "img"      => $node->filter("img")->attr('data-original'),                      
                      'label'    => $node->filter("label")->text()
                    ];

                return   $arr;
               });
           $data['data'] = $nodeValues;
        
        return  view('index',$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
            //
          //tìm kiếm từ khóa $q  là từ khóa
           $q = $request->get('tenphim');
           $Client =  new Client(); // khởi tạo client
           $crawler  = $Client->request("GET","http://bilutv.com/tim-kiem.html?q=".$q); // lấy thông tin search theo từ khóa 
                       
           $nodeValues=  $crawler->filter("div.block-film ul.list-film li ")->each(function ( $node, $i)
            {
                   
                                     
                    $arr[$i] = [
                     "tieude"    => $node->filter("a")->attr('title'),
                      "url"      => $node->filter("a")->attr('href'),
                      "img"      => $node->filter("img")->attr('data-original'),                      
                      'label'    => $node->filter("label")->text()
                    ];

                return   $arr;
               });
           $data['data'] = $nodeValues;
           return view('index',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //  url bilutv.com
        $url_source_q ="http://bilutv.com/";
        $nodeValues ="";
        $nodeValues_ver2 ="";
        $listEp="";
        //keim tra Id 
        
        if(!strpos($id,"_"))
        {
            // xu ly link  thuyet minh
            $urlGet = $url_source_q."phim/".$id;
            $client = new Client();
            $crawler = $client->request("GET",$urlGet);
            
            $nodeValues  = $crawler->filter('a.btn-see ')->each(function ($node, $i){
                 $arr[$i] = $node->attr('href');
                 return $arr;
            });
            /* ket thuc get link xem phim */
            $crawler = $client->request("GET",$url_source_q.$nodeValues[0][0]);
            $nodeValues = $crawler->filter('div.left-content-player')->text();
           
            // lay lien ket sub hoac thuyet minh
            $nodeValues_ver2 = $crawler->filter('div.left-content-player .choose-server a ')->each(function ($node,$i){
            $arr[$i]['src']= $node->attr('href');
            $arr[$i]['title'] =$node->text();
            return $arr;
            });
            $listEp = $crawler->filter('div.left-content-player .details ul.list-episode a ')->each(function($node,$i){
               $temp = explode('bilutv.com', $node->attr('href'));
                $arr[$i] = $temp[1];
                return $arr;
            });
            // lay phim bo
            
        }
        else
        {      
            //xu ly link sub
            $client = new Client();
            $crawler = $client->request("GET",$url_source_q.'xem-phim/'.$id);
            $nodeValues = $crawler->filter('div.left-content-player')->text();
            //lay line ket sub hoac thuyet minh
            $nodeValues_ver2 = $crawler->filter('div.left-content-player .choose-server a ')->each(function ($node,$i){
            $arr[$i]['src']= $node->attr('href');
            $arr[$i]['title'] =$node->text();
            return $arr;
            });
            $listEp = $crawler->filter('div.left-content-player .details ul.list-episode a')->each(function($node,$i){
                $temp = explode('bilutv.com', $node->attr('href'));
                $arr[$i] = $temp[1];
                return $arr;
            });
   
        }  
        // endif
        
        
        $string = explode('"links":', $nodeValues);
        $stringid = explode(':"', $nodeValues);
     //   print_r($string);
       $toiCanDoanMa=  explode('":"', $string[3]);
       $toiCanDoanMa = explode('","',$toiCanDoanMa[1]);
       
     //  print_r($toiCanDoanMa);
         $toiCanId = explode('"', $stringid[count($stringid)-1]);
    //   print_r($toiCanId);
         $data['data']['code'] =  $toiCanDoanMa[0];
         $data['data']['id'] = $toiCanId[0];
         $data['version'] = $nodeValues_ver2 ; 
         $data['listEp'] = $listEp;

       return view('xemphim',$data);
    } 

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
