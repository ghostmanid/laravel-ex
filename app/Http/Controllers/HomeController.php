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
            
        
        
        return  view('index');
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
                       
           $nodeValues=  $crawler->filter("div.block-film ul.list-film li a")->each(function ( $node, $i)
            {
                  
                  $arr[$i] = [
                     "tieude"    => $node->attr('title'),
                      "url"       => $node->attr('href')
                    ];
                  
                 //print $node->attr('title')."\n";
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
        //
        //  url bilutv.com
        $url_source_q ="http://bilutv.com/";
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
        $string = explode(':"', $nodeValues);
        $toiCanDoanMa=  explode('",', $string[1]);
        $toiCanId = explode('"', $string[count($string)-1]);
        $data['data']['code'] =  $toiCanDoanMa[0];
        $data['data']['id'] = $toiCanId[0];

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
