(function(_0x55bax1, _0x55bax2) {
    'object' == typeof exports ? module['exports'] = _0x55bax2() : 'function' == typeof define && define['amd'] ? define(_0x55bax2) : _0x55bax1['GibberishAES'] = _0x55bax2()
})(this, function() {
    'use strict';
    var _0x55bax1 = 14
      , _0x55bax2 = 8
      , _0x55bax3 = !1
      , _0x55bax4 = function(_0x55bax1) {
        try {
            return unescape(encodeURIComponent(_0x55bax1))
        } catch (_0x55bax2) {
            throw 'Error on UTF-8 encode'
        }
    }
      , _0x55bax5 = function(_0x55bax1) {
        try {
            return decodeURIComponent(escape(_0x55bax1))
        } catch (_0x55bax2) {
            throw 'Bad Key'
        }
    }
      , _0x55bax6 = function(_0x55bax1) {
        var _0x55bax2, _0x55bax3, _0x55bax4 = [];
        for (16 > _0x55bax1['length'] && (_0x55bax2 = 16 - _0x55bax1['length'],
        _0x55bax4 = [_0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2, _0x55bax2]),
        _0x55bax3 = 0; _0x55bax1['length'] > _0x55bax3; _0x55bax3++) {
            _0x55bax4[_0x55bax3] = _0x55bax1[_0x55bax3]
        }
        ;return _0x55bax4
    }
      , _0x55bax7 = function(_0x55bax1, _0x55bax2) {
        var _0x55bax3, _0x55bax4, _0x55bax5 = '';
        if (_0x55bax2) {
            if (_0x55bax3 = _0x55bax1[15],
            _0x55bax3 > 16) {
                throw 'Decryption error: Maybe bad key'
            }
            ;if (16 === _0x55bax3) {
                return ''
            }
            ;for (_0x55bax4 = 0; 16 - _0x55bax3 > _0x55bax4; _0x55bax4++) {
                _0x55bax5 += String['fromCharCode'](_0x55bax1[_0x55bax4])
            }
        } else {
            for (_0x55bax4 = 0; 16 > _0x55bax4; _0x55bax4++) {
                _0x55bax5 += String['fromCharCode'](_0x55bax1[_0x55bax4])
            }
        }
        ;return _0x55bax5
    }
      , _0x55bax8 = function(_0x55bax1) {
        var _0x55bax2, _0x55bax3 = '';
        for (_0x55bax2 = 0; _0x55bax1['length'] > _0x55bax2; _0x55bax2++) {
            _0x55bax3 += (16 > _0x55bax1[_0x55bax2] ? '0' : '') + _0x55bax1[_0x55bax2].toString(16)
        }
        ;return _0x55bax3
    }
      , _0x55bax9 = function(_0x55bax1) {
        var _0x55bax2 = [];
        return _0x55bax1['replace'](/(..)/g, function(_0x55bax1) {
            _0x55bax2['push'](parseInt(_0x55bax1, 16))
        }),
        _0x55bax2
    }
      , _0x55baxa = function(_0x55bax1, _0x55bax2) {
        var _0x55bax3, _0x55bax5 = [];
        for (_0x55bax2 || (_0x55bax1 = _0x55bax4(_0x55bax1)),
        _0x55bax3 = 0; _0x55bax1['length'] > _0x55bax3; _0x55bax3++) {
            _0x55bax5[_0x55bax3] = _0x55bax1['charCodeAt'](_0x55bax3)
        }
        ;return _0x55bax5
    }
      , _0x55baxb = function(_0x55bax3) {
        switch (_0x55bax3) {
        case 128:
            _0x55bax1 = 10,
            _0x55bax2 = 4;
            break;
        case 192:
            _0x55bax1 = 12,
            _0x55bax2 = 6;
            break;
        case 256:
            _0x55bax1 = 14,
            _0x55bax2 = 8;
            break;
        default:
            throw 'Invalid Key Size Specified:' + _0x55bax3
        }
    }
      , _0x55baxc = function(_0x55bax1) {
        var _0x55bax2, _0x55bax3 = [];
        for (_0x55bax2 = 0; _0x55bax1 > _0x55bax2; _0x55bax2++) {
            _0x55bax3 = _0x55bax3['concat'](Math['floor'](256 * Math['random']()))
        }
        ;return _0x55bax3
    }
      , _0x55baxd = function(_0x55bax3, _0x55bax4) {
        var _0x55bax5, _0x55bax6 = _0x55bax1 >= 12 ? 3 : 2, _0x55bax7 = [], _0x55bax8 = [], _0x55bax9 = [], _0x55baxa = [], _0x55baxb = _0x55bax3['concat'](_0x55bax4);
        for (_0x55bax9[0] = _0x55bax29(_0x55baxb),
        _0x55baxa = _0x55bax9[0],
        _0x55bax5 = 1; _0x55bax6 > _0x55bax5; _0x55bax5++) {
            _0x55bax9[_0x55bax5] = _0x55bax29(_0x55bax9[_0x55bax5 - 1]['concat'](_0x55baxb)),
            _0x55baxa = _0x55baxa['concat'](_0x55bax9[_0x55bax5])
        }
        ;return _0x55bax7 = _0x55baxa['slice'](0, 4 * _0x55bax2),
        _0x55bax8 = _0x55baxa['slice'](4 * _0x55bax2, 4 * _0x55bax2 + 16),
        {
            key: _0x55bax7,
            iv: _0x55bax8
        }
    }
      , _0x55baxe = function(_0x55bax1, _0x55bax2, _0x55bax3) {
        _0x55bax2 = _0x55bax17(_0x55bax2);
        var _0x55bax4, _0x55bax5 = Math['ceil'](_0x55bax1['length'] / 16), _0x55bax7 = [], _0x55bax8 = [];
        for (_0x55bax4 = 0; _0x55bax5 > _0x55bax4; _0x55bax4++) {
            _0x55bax7[_0x55bax4] = _0x55bax6(_0x55bax1['slice'](16 * _0x55bax4, 16 * _0x55bax4 + 16))
        }
        ;for (0 === _0x55bax1['length'] % 16 && (_0x55bax7['push']([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]),
        _0x55bax5++),
        _0x55bax4 = 0; _0x55bax7['length'] > _0x55bax4; _0x55bax4++) {
            _0x55bax7[_0x55bax4] = 0 === _0x55bax4 ? _0x55bax16(_0x55bax7[_0x55bax4], _0x55bax3) : _0x55bax16(_0x55bax7[_0x55bax4], _0x55bax8[_0x55bax4 - 1]),
            _0x55bax8[_0x55bax4] = _0x55bax10(_0x55bax7[_0x55bax4], _0x55bax2)
        }
        ;return _0x55bax8
    }
      , _0x55baxf = function(_0x55bax1, _0x55bax2, _0x55bax3, _0x55bax4) {
        _0x55bax2 = _0x55bax17(_0x55bax2);
        var _0x55bax6, _0x55bax8 = _0x55bax1['length'] / 16, _0x55bax9 = [], _0x55baxa = [], _0x55baxb = '';
        for (_0x55bax6 = 0; _0x55bax8 > _0x55bax6; _0x55bax6++) {
            _0x55bax9['push'](_0x55bax1['slice'](16 * _0x55bax6, 16 * (_0x55bax6 + 1)))
        }
        ;for (_0x55bax6 = _0x55bax9['length'] - 1; _0x55bax6 >= 0; _0x55bax6--) {
            _0x55baxa[_0x55bax6] = _0x55bax11(_0x55bax9[_0x55bax6], _0x55bax2),
            _0x55baxa[_0x55bax6] = 0 === _0x55bax6 ? _0x55bax16(_0x55baxa[_0x55bax6], _0x55bax3) : _0x55bax16(_0x55baxa[_0x55bax6], _0x55bax9[_0x55bax6 - 1])
        }
        ;for (_0x55bax6 = 0; _0x55bax8 - 1 > _0x55bax6; _0x55bax6++) {
            _0x55baxb += _0x55bax7(_0x55baxa[_0x55bax6])
        }
        ;return _0x55baxb += _0x55bax7(_0x55baxa[_0x55bax6], !0),
        _0x55bax4 ? _0x55baxb : _0x55bax5(_0x55baxb)
    }
      , _0x55bax10 = function(_0x55bax2, _0x55bax4) {
        _0x55bax3 = !1;
        var _0x55bax5, _0x55bax6 = _0x55bax15(_0x55bax2, _0x55bax4, 0);
        for (_0x55bax5 = 1; _0x55bax1 + 1 > _0x55bax5; _0x55bax5++) {
            _0x55bax6 = _0x55bax12(_0x55bax6),
            _0x55bax6 = _0x55bax13(_0x55bax6),
            _0x55bax1 > _0x55bax5 && (_0x55bax6 = _0x55bax14(_0x55bax6)),
            _0x55bax6 = _0x55bax15(_0x55bax6, _0x55bax4, _0x55bax5)
        }
        ;return _0x55bax6
    }
      , _0x55bax11 = function(_0x55bax2, _0x55bax4) {
        _0x55bax3 = !0;
        var _0x55bax5, _0x55bax6 = _0x55bax15(_0x55bax2, _0x55bax4, _0x55bax1);
        for (_0x55bax5 = _0x55bax1 - 1; _0x55bax5 > -1; _0x55bax5--) {
            _0x55bax6 = _0x55bax13(_0x55bax6),
            _0x55bax6 = _0x55bax12(_0x55bax6),
            _0x55bax6 = _0x55bax15(_0x55bax6, _0x55bax4, _0x55bax5),
            _0x55bax5 > 0 && (_0x55bax6 = _0x55bax14(_0x55bax6))
        }
        ;return _0x55bax6
    }
      , _0x55bax12 = function(_0x55bax1) {
        var _0x55bax2, _0x55bax4 = _0x55bax3 ? _0x55bax1f : _0x55bax1e, _0x55bax5 = [];
        for (_0x55bax2 = 0; 16 > _0x55bax2; _0x55bax2++) {
            _0x55bax5[_0x55bax2] = _0x55bax4[_0x55bax1[_0x55bax2]]
        }
        ;return _0x55bax5
    }
      , _0x55bax13 = function(_0x55bax1) {
        var _0x55bax2, _0x55bax4 = [], _0x55bax5 = _0x55bax3 ? [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3] : [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11];
        for (_0x55bax2 = 0; 16 > _0x55bax2; _0x55bax2++) {
            _0x55bax4[_0x55bax2] = _0x55bax1[_0x55bax5[_0x55bax2]]
        }
        ;return _0x55bax4
    }
      , _0x55bax14 = function(_0x55bax1) {
        var _0x55bax2, _0x55bax4 = [];
        if (_0x55bax3) {
            for (_0x55bax2 = 0; 4 > _0x55bax2; _0x55bax2++) {
                _0x55bax4[4 * _0x55bax2] = _0x55bax26[_0x55bax1[4 * _0x55bax2]] ^ _0x55bax24[_0x55bax1[1 + 4 * _0x55bax2]] ^ _0x55bax25[_0x55bax1[2 + 4 * _0x55bax2]] ^ _0x55bax23[_0x55bax1[3 + 4 * _0x55bax2]],
                _0x55bax4[1 + 4 * _0x55bax2] = _0x55bax23[_0x55bax1[4 * _0x55bax2]] ^ _0x55bax26[_0x55bax1[1 + 4 * _0x55bax2]] ^ _0x55bax24[_0x55bax1[2 + 4 * _0x55bax2]] ^ _0x55bax25[_0x55bax1[3 + 4 * _0x55bax2]],
                _0x55bax4[2 + 4 * _0x55bax2] = _0x55bax25[_0x55bax1[4 * _0x55bax2]] ^ _0x55bax23[_0x55bax1[1 + 4 * _0x55bax2]] ^ _0x55bax26[_0x55bax1[2 + 4 * _0x55bax2]] ^ _0x55bax24[_0x55bax1[3 + 4 * _0x55bax2]],
                _0x55bax4[3 + 4 * _0x55bax2] = _0x55bax24[_0x55bax1[4 * _0x55bax2]] ^ _0x55bax25[_0x55bax1[1 + 4 * _0x55bax2]] ^ _0x55bax23[_0x55bax1[2 + 4 * _0x55bax2]] ^ _0x55bax26[_0x55bax1[3 + 4 * _0x55bax2]]
            }
        } else {
            for (_0x55bax2 = 0; 4 > _0x55bax2; _0x55bax2++) {
                _0x55bax4[4 * _0x55bax2] = _0x55bax21[_0x55bax1[4 * _0x55bax2]] ^ _0x55bax22[_0x55bax1[1 + 4 * _0x55bax2]] ^ _0x55bax1[2 + 4 * _0x55bax2] ^ _0x55bax1[3 + 4 * _0x55bax2],
                _0x55bax4[1 + 4 * _0x55bax2] = _0x55bax1[4 * _0x55bax2] ^ _0x55bax21[_0x55bax1[1 + 4 * _0x55bax2]] ^ _0x55bax22[_0x55bax1[2 + 4 * _0x55bax2]] ^ _0x55bax1[3 + 4 * _0x55bax2],
                _0x55bax4[2 + 4 * _0x55bax2] = _0x55bax1[4 * _0x55bax2] ^ _0x55bax1[1 + 4 * _0x55bax2] ^ _0x55bax21[_0x55bax1[2 + 4 * _0x55bax2]] ^ _0x55bax22[_0x55bax1[3 + 4 * _0x55bax2]],
                _0x55bax4[3 + 4 * _0x55bax2] = _0x55bax22[_0x55bax1[4 * _0x55bax2]] ^ _0x55bax1[1 + 4 * _0x55bax2] ^ _0x55bax1[2 + 4 * _0x55bax2] ^ _0x55bax21[_0x55bax1[3 + 4 * _0x55bax2]]
            }
        }
        ;return _0x55bax4
    }
      , _0x55bax15 = function(_0x55bax1, _0x55bax2, _0x55bax3) {
        var _0x55bax4, _0x55bax5 = [];
        for (_0x55bax4 = 0; 16 > _0x55bax4; _0x55bax4++) {
            _0x55bax5[_0x55bax4] = _0x55bax1[_0x55bax4] ^ _0x55bax2[_0x55bax3][_0x55bax4]
        }
        ;return _0x55bax5
    }
      , _0x55bax16 = function(_0x55bax1, _0x55bax2) {
        var _0x55bax3, _0x55bax4 = [];
        for (_0x55bax3 = 0; 16 > _0x55bax3; _0x55bax3++) {
            _0x55bax4[_0x55bax3] = _0x55bax1[_0x55bax3] ^ _0x55bax2[_0x55bax3]
        }
        ;return _0x55bax4
    }
      , _0x55bax17 = function(_0x55bax3) {
        var _0x55bax4, _0x55bax5, _0x55bax6, _0x55bax7, _0x55bax8 = [], _0x55bax9 = [], _0x55baxa = [];
        for (_0x55bax4 = 0; _0x55bax2 > _0x55bax4; _0x55bax4++) {
            _0x55bax5 = [_0x55bax3[4 * _0x55bax4], _0x55bax3[4 * _0x55bax4 + 1], _0x55bax3[4 * _0x55bax4 + 2], _0x55bax3[4 * _0x55bax4 + 3]],
            _0x55bax8[_0x55bax4] = _0x55bax5
        }
        ;for (_0x55bax4 = _0x55bax2; 4 * (_0x55bax1 + 1) > _0x55bax4; _0x55bax4++) {
            for (_0x55bax8[_0x55bax4] = [],
            _0x55bax6 = 0; 4 > _0x55bax6; _0x55bax6++) {
                _0x55bax9[_0x55bax6] = _0x55bax8[_0x55bax4 - 1][_0x55bax6]
            }
            ;for (0 === _0x55bax4 % _0x55bax2 ? (_0x55bax9 = _0x55bax18(_0x55bax19(_0x55bax9)),
            _0x55bax9[0] ^= _0x55bax20[_0x55bax4 / _0x55bax2 - 1]) : _0x55bax2 > 6 && 4 === _0x55bax4 % _0x55bax2 && (_0x55bax9 = _0x55bax18(_0x55bax9)),
            _0x55bax6 = 0; 4 > _0x55bax6; _0x55bax6++) {
                _0x55bax8[_0x55bax4][_0x55bax6] = _0x55bax8[_0x55bax4 - _0x55bax2][_0x55bax6] ^ _0x55bax9[_0x55bax6]
            }
        }
        ;for (_0x55bax4 = 0; _0x55bax1 + 1 > _0x55bax4; _0x55bax4++) {
            for (_0x55baxa[_0x55bax4] = [],
            _0x55bax7 = 0; 4 > _0x55bax7; _0x55bax7++) {
                _0x55baxa[_0x55bax4]['push'](_0x55bax8[4 * _0x55bax4 + _0x55bax7][0], _0x55bax8[4 * _0x55bax4 + _0x55bax7][1], _0x55bax8[4 * _0x55bax4 + _0x55bax7][2], _0x55bax8[4 * _0x55bax4 + _0x55bax7][3])
            }
        }
        ;return _0x55baxa
    }
      , _0x55bax18 = function(_0x55bax1) {
        for (var _0x55bax2 = 0; 4 > _0x55bax2; _0x55bax2++) {
            _0x55bax1[_0x55bax2] = _0x55bax1e[_0x55bax1[_0x55bax2]]
        }
        ;return _0x55bax1
    }
      , _0x55bax19 = function(_0x55bax1) {
        var _0x55bax2, _0x55bax3 = _0x55bax1[0];
        for (_0x55bax2 = 0; 4 > _0x55bax2; _0x55bax2++) {
            _0x55bax1[_0x55bax2] = _0x55bax1[_0x55bax2 + 1]
        }
        ;return _0x55bax1[3] = _0x55bax3,
        _0x55bax1
    }
      , _0x55bax1a = function(_0x55bax1, _0x55bax2) {
        var _0x55bax3, _0x55bax4 = [];
        for (_0x55bax3 = 0; _0x55bax1['length'] > _0x55bax3; _0x55bax3 += _0x55bax2) {
            _0x55bax4[_0x55bax3 / _0x55bax2] = parseInt(_0x55bax1['substr'](_0x55bax3, _0x55bax2), 16)
        }
        ;return _0x55bax4
    }
      , _0x55bax1b = function(_0x55bax1) {
        var _0x55bax2, _0x55bax3 = [];
        for (_0x55bax2 = 0; _0x55bax1['length'] > _0x55bax2; _0x55bax2++) {
            _0x55bax3[_0x55bax1[_0x55bax2]] = _0x55bax2
        }
        ;return _0x55bax3
    }
      , _0x55bax1c = function(_0x55bax1, _0x55bax2) {
        var _0x55bax3, _0x55bax4;
        for (_0x55bax4 = 0,
        _0x55bax3 = 0; 8 > _0x55bax3; _0x55bax3++) {
            _0x55bax4 = 1 === (1 & _0x55bax2) ? _0x55bax4 ^ _0x55bax1 : _0x55bax4,
            _0x55bax1 = _0x55bax1 > 127 ? 283 ^ _0x55bax1 << 1 : _0x55bax1 << 1,
            _0x55bax2 >>>= 1
        }
        ;return _0x55bax4
    }
      , _0x55bax1d = function(_0x55bax1) {
        var _0x55bax2, _0x55bax3 = [];
        for (_0x55bax2 = 0; 256 > _0x55bax2; _0x55bax2++) {
            _0x55bax3[_0x55bax2] = _0x55bax1c(_0x55bax1, _0x55bax2)
        }
        ;return _0x55bax3
    }
      , _0x55bax1e = _0x55bax1a('637c777bf26b6fc53001672bfed7ab76ca82c97dfa5947f0add4a2af9ca472c0b7fd9326363ff7cc34a5e5f171d8311504c723c31896059a071280e2eb27b27509832c1a1b6e5aa0523bd6b329e32f8453d100ed20fcb15b6acbbe394a4c58cfd0efaafb434d338545f9027f503c9fa851a3408f929d38f5bcb6da2110fff3d2cd0c13ec5f974417c4a77e3d645d197360814fdc222a908846eeb814de5e0bdbe0323a0a4906245cc2d3ac629195e479e7c8376d8dd54ea96c56f4ea657aae08ba78252e1ca6b4c6e8dd741f4bbd8b8a703eb5664803f60e613557b986c11d9ee1f8981169d98e949b1e87e9ce5528df8ca1890dbfe6426841992d0fb054bb16', 2)
      , _0x55bax1f = _0x55bax1b(_0x55bax1e)
      , _0x55bax20 = _0x55bax1a('01020408102040801b366cd8ab4d9a2f5ebc63c697356ad4b37dfaefc591', 2)
      , _0x55bax21 = _0x55bax1d(2)
      , _0x55bax22 = _0x55bax1d(3)
      , _0x55bax23 = _0x55bax1d(9)
      , _0x55bax24 = _0x55bax1d(11)
      , _0x55bax25 = _0x55bax1d(13)
      , _0x55bax26 = _0x55bax1d(14)
      , _0x55bax27 = function(_0x55bax1, _0x55bax2, _0x55bax3) {
        var _0x55bax4, _0x55bax5 = _0x55baxc(8), _0x55bax6 = _0x55baxd(_0x55baxa(_0x55bax2, _0x55bax3), _0x55bax5), _0x55bax7 = _0x55bax6['key'], _0x55bax8 = _0x55bax6['iv'], _0x55bax9 = [[83, 97, 108, 116, 101, 100, 95, 95]['concat'](_0x55bax5)];
        return _0x55bax1 = _0x55baxa(_0x55bax1, _0x55bax3),
        _0x55bax4 = _0x55baxe(_0x55bax1, _0x55bax7, _0x55bax8),
        _0x55bax4 = _0x55bax9['concat'](_0x55bax4),
        _0x55bax2a['encode'](_0x55bax4)
    }
      , _0x55bax28 = function(_0x55bax1, _0x55bax2, _0x55bax3) {
        var _0x55bax4 = _0x55bax2a['decode'](_0x55bax1)
          , _0x55bax5 = _0x55bax4['slice'](8, 16)
          , _0x55bax6 = _0x55baxd(_0x55baxa(_0x55bax2, _0x55bax3), _0x55bax5)
          , _0x55bax7 = _0x55bax6['key']
          , _0x55bax8 = _0x55bax6['iv'];
        return _0x55bax4 = _0x55bax4['slice'](16, _0x55bax4['length']),
        _0x55bax1 = _0x55baxf(_0x55bax4, _0x55bax7, _0x55bax8, _0x55bax3)
    }
      , _0x55bax29 = function(_0x55bax1) {
        function _0x55bax2(_0x55bax1, _0x55bax2) {
            return _0x55bax1 << _0x55bax2 | _0x55bax1 >>> 32 - _0x55bax2
        }
        function _0x55bax3(_0x55bax1, _0x55bax2) {
            var _0x55bax3, _0x55bax4, _0x55bax5, _0x55bax6, _0x55bax7;
            return _0x55bax5 = 2147483648 & _0x55bax1,
            _0x55bax6 = 2147483648 & _0x55bax2,
            _0x55bax3 = 1073741824 & _0x55bax1,
            _0x55bax4 = 1073741824 & _0x55bax2,
            _0x55bax7 = (1073741823 & _0x55bax1) + (1073741823 & _0x55bax2),
            _0x55bax3 & _0x55bax4 ? 2147483648 ^ _0x55bax7 ^ _0x55bax5 ^ _0x55bax6 : _0x55bax3 | _0x55bax4 ? 1073741824 & _0x55bax7 ? 3221225472 ^ _0x55bax7 ^ _0x55bax5 ^ _0x55bax6 : 1073741824 ^ _0x55bax7 ^ _0x55bax5 ^ _0x55bax6 : _0x55bax7 ^ _0x55bax5 ^ _0x55bax6
        }
        function _0x55bax4(_0x55bax1, _0x55bax2, _0x55bax3) {
            return _0x55bax1 & _0x55bax2 | ~_0x55bax1 & _0x55bax3
        }
        function _0x55bax5(_0x55bax1, _0x55bax2, _0x55bax3) {
            return _0x55bax1 & _0x55bax3 | _0x55bax2 & ~_0x55bax3
        }
        function _0x55bax6(_0x55bax1, _0x55bax2, _0x55bax3) {
            return _0x55bax1 ^ _0x55bax2 ^ _0x55bax3
        }
        function _0x55bax7(_0x55bax1, _0x55bax2, _0x55bax3) {
            return _0x55bax2 ^ (_0x55bax1 | ~_0x55bax3)
        }
        function _0x55bax8(_0x55bax1, _0x55bax5, _0x55bax6, _0x55bax7, _0x55bax8, _0x55bax9, _0x55baxa) {
            return _0x55bax1 = _0x55bax3(_0x55bax1, _0x55bax3(_0x55bax3(_0x55bax4(_0x55bax5, _0x55bax6, _0x55bax7), _0x55bax8), _0x55baxa)),
            _0x55bax3(_0x55bax2(_0x55bax1, _0x55bax9), _0x55bax5)
        }
        function _0x55bax9(_0x55bax1, _0x55bax4, _0x55bax6, _0x55bax7, _0x55bax8, _0x55bax9, _0x55baxa) {
            return _0x55bax1 = _0x55bax3(_0x55bax1, _0x55bax3(_0x55bax3(_0x55bax5(_0x55bax4, _0x55bax6, _0x55bax7), _0x55bax8), _0x55baxa)),
            _0x55bax3(_0x55bax2(_0x55bax1, _0x55bax9), _0x55bax4)
        }
        function _0x55baxa(_0x55bax1, _0x55bax4, _0x55bax5, _0x55bax7, _0x55bax8, _0x55bax9, _0x55baxa) {
            return _0x55bax1 = _0x55bax3(_0x55bax1, _0x55bax3(_0x55bax3(_0x55bax6(_0x55bax4, _0x55bax5, _0x55bax7), _0x55bax8), _0x55baxa)),
            _0x55bax3(_0x55bax2(_0x55bax1, _0x55bax9), _0x55bax4)
        }
        function _0x55baxb(_0x55bax1, _0x55bax4, _0x55bax5, _0x55bax6, _0x55bax8, _0x55bax9, _0x55baxa) {
            return _0x55bax1 = _0x55bax3(_0x55bax1, _0x55bax3(_0x55bax3(_0x55bax7(_0x55bax4, _0x55bax5, _0x55bax6), _0x55bax8), _0x55baxa)),
            _0x55bax3(_0x55bax2(_0x55bax1, _0x55bax9), _0x55bax4)
        }
        function _0x55baxc(_0x55bax1) {
            for (var _0x55bax2, _0x55bax3 = _0x55bax1['length'], _0x55bax4 = _0x55bax3 + 8, _0x55bax5 = (_0x55bax4 - _0x55bax4 % 64) / 64, _0x55bax6 = 16 * (_0x55bax5 + 1), _0x55bax7 = [], _0x55bax8 = 0, _0x55bax9 = 0; _0x55bax3 > _0x55bax9; ) {
                _0x55bax2 = (_0x55bax9 - _0x55bax9 % 4) / 4,
                _0x55bax8 = 8 * (_0x55bax9 % 4),
                _0x55bax7[_0x55bax2] = _0x55bax7[_0x55bax2] | _0x55bax1[_0x55bax9] << _0x55bax8,
                _0x55bax9++
            }
            ;return _0x55bax2 = (_0x55bax9 - _0x55bax9 % 4) / 4,
            _0x55bax8 = 8 * (_0x55bax9 % 4),
            _0x55bax7[_0x55bax2] = _0x55bax7[_0x55bax2] | 128 << _0x55bax8,
            _0x55bax7[_0x55bax6 - 2] = _0x55bax3 << 3,
            _0x55bax7[_0x55bax6 - 1] = _0x55bax3 >>> 29,
            _0x55bax7
        }
        function _0x55baxd(_0x55bax1) {
            var _0x55bax2, _0x55bax3, _0x55bax4 = [];
            for (_0x55bax3 = 0; 3 >= _0x55bax3; _0x55bax3++) {
                _0x55bax2 = 255 & _0x55bax1 >>> 8 * _0x55bax3,
                _0x55bax4 = _0x55bax4['concat'](_0x55bax2)
            }
            ;return _0x55bax4
        }
        var _0x55baxe, _0x55baxf, _0x55bax10, _0x55bax11, _0x55bax12, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17 = [], _0x55bax18 = _0x55bax1a('67452301efcdab8998badcfe10325476d76aa478e8c7b756242070dbc1bdceeef57c0faf4787c62aa8304613fd469501698098d88b44f7afffff5bb1895cd7be6b901122fd987193a679438e49b40821f61e2562c040b340265e5a51e9b6c7aad62f105d02441453d8a1e681e7d3fbc821e1cde6c33707d6f4d50d87455a14eda9e3e905fcefa3f8676f02d98d2a4c8afffa39428771f6816d9d6122fde5380ca4beea444bdecfa9f6bb4b60bebfbc70289b7ec6eaa127fad4ef308504881d05d9d4d039e6db99e51fa27cf8c4ac5665f4292244432aff97ab9423a7fc93a039655b59c38f0ccc92ffeff47d85845dd16fa87e4ffe2ce6e0a30143144e0811a1f7537e82bd3af2352ad7d2bbeb86d391', 8);
        for (_0x55bax17 = _0x55baxc(_0x55bax1),
        _0x55bax13 = _0x55bax18[0],
        _0x55bax14 = _0x55bax18[1],
        _0x55bax15 = _0x55bax18[2],
        _0x55bax16 = _0x55bax18[3],
        _0x55baxe = 0; _0x55bax17['length'] > _0x55baxe; _0x55baxe += 16) {
            _0x55baxf = _0x55bax13,
            _0x55bax10 = _0x55bax14,
            _0x55bax11 = _0x55bax15,
            _0x55bax12 = _0x55bax16,
            _0x55bax13 = _0x55bax8(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 0], 7, _0x55bax18[4]),
            _0x55bax16 = _0x55bax8(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 1], 12, _0x55bax18[5]),
            _0x55bax15 = _0x55bax8(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 2], 17, _0x55bax18[6]),
            _0x55bax14 = _0x55bax8(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 3], 22, _0x55bax18[7]),
            _0x55bax13 = _0x55bax8(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 4], 7, _0x55bax18[8]),
            _0x55bax16 = _0x55bax8(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 5], 12, _0x55bax18[9]),
            _0x55bax15 = _0x55bax8(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 6], 17, _0x55bax18[10]),
            _0x55bax14 = _0x55bax8(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 7], 22, _0x55bax18[11]),
            _0x55bax13 = _0x55bax8(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 8], 7, _0x55bax18[12]),
            _0x55bax16 = _0x55bax8(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 9], 12, _0x55bax18[13]),
            _0x55bax15 = _0x55bax8(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 10], 17, _0x55bax18[14]),
            _0x55bax14 = _0x55bax8(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 11], 22, _0x55bax18[15]),
            _0x55bax13 = _0x55bax8(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 12], 7, _0x55bax18[16]),
            _0x55bax16 = _0x55bax8(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 13], 12, _0x55bax18[17]),
            _0x55bax15 = _0x55bax8(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 14], 17, _0x55bax18[18]),
            _0x55bax14 = _0x55bax8(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 15], 22, _0x55bax18[19]),
            _0x55bax13 = _0x55bax9(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 1], 5, _0x55bax18[20]),
            _0x55bax16 = _0x55bax9(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 6], 9, _0x55bax18[21]),
            _0x55bax15 = _0x55bax9(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 11], 14, _0x55bax18[22]),
            _0x55bax14 = _0x55bax9(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 0], 20, _0x55bax18[23]),
            _0x55bax13 = _0x55bax9(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 5], 5, _0x55bax18[24]),
            _0x55bax16 = _0x55bax9(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 10], 9, _0x55bax18[25]),
            _0x55bax15 = _0x55bax9(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 15], 14, _0x55bax18[26]),
            _0x55bax14 = _0x55bax9(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 4], 20, _0x55bax18[27]),
            _0x55bax13 = _0x55bax9(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 9], 5, _0x55bax18[28]),
            _0x55bax16 = _0x55bax9(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 14], 9, _0x55bax18[29]),
            _0x55bax15 = _0x55bax9(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 3], 14, _0x55bax18[30]),
            _0x55bax14 = _0x55bax9(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 8], 20, _0x55bax18[31]),
            _0x55bax13 = _0x55bax9(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 13], 5, _0x55bax18[32]),
            _0x55bax16 = _0x55bax9(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 2], 9, _0x55bax18[33]),
            _0x55bax15 = _0x55bax9(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 7], 14, _0x55bax18[34]),
            _0x55bax14 = _0x55bax9(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 12], 20, _0x55bax18[35]),
            _0x55bax13 = _0x55baxa(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 5], 4, _0x55bax18[36]),
            _0x55bax16 = _0x55baxa(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 8], 11, _0x55bax18[37]),
            _0x55bax15 = _0x55baxa(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 11], 16, _0x55bax18[38]),
            _0x55bax14 = _0x55baxa(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 14], 23, _0x55bax18[39]),
            _0x55bax13 = _0x55baxa(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 1], 4, _0x55bax18[40]),
            _0x55bax16 = _0x55baxa(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 4], 11, _0x55bax18[41]),
            _0x55bax15 = _0x55baxa(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 7], 16, _0x55bax18[42]),
            _0x55bax14 = _0x55baxa(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 10], 23, _0x55bax18[43]),
            _0x55bax13 = _0x55baxa(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 13], 4, _0x55bax18[44]),
            _0x55bax16 = _0x55baxa(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 0], 11, _0x55bax18[45]),
            _0x55bax15 = _0x55baxa(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 3], 16, _0x55bax18[46]),
            _0x55bax14 = _0x55baxa(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 6], 23, _0x55bax18[47]),
            _0x55bax13 = _0x55baxa(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 9], 4, _0x55bax18[48]),
            _0x55bax16 = _0x55baxa(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 12], 11, _0x55bax18[49]),
            _0x55bax15 = _0x55baxa(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 15], 16, _0x55bax18[50]),
            _0x55bax14 = _0x55baxa(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 2], 23, _0x55bax18[51]),
            _0x55bax13 = _0x55baxb(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 0], 6, _0x55bax18[52]),
            _0x55bax16 = _0x55baxb(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 7], 10, _0x55bax18[53]),
            _0x55bax15 = _0x55baxb(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 14], 15, _0x55bax18[54]),
            _0x55bax14 = _0x55baxb(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 5], 21, _0x55bax18[55]),
            _0x55bax13 = _0x55baxb(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 12], 6, _0x55bax18[56]),
            _0x55bax16 = _0x55baxb(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 3], 10, _0x55bax18[57]),
            _0x55bax15 = _0x55baxb(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 10], 15, _0x55bax18[58]),
            _0x55bax14 = _0x55baxb(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 1], 21, _0x55bax18[59]),
            _0x55bax13 = _0x55baxb(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 8], 6, _0x55bax18[60]),
            _0x55bax16 = _0x55baxb(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 15], 10, _0x55bax18[61]),
            _0x55bax15 = _0x55baxb(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 6], 15, _0x55bax18[62]),
            _0x55bax14 = _0x55baxb(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 13], 21, _0x55bax18[63]),
            _0x55bax13 = _0x55baxb(_0x55bax13, _0x55bax14, _0x55bax15, _0x55bax16, _0x55bax17[_0x55baxe + 4], 6, _0x55bax18[64]),
            _0x55bax16 = _0x55baxb(_0x55bax16, _0x55bax13, _0x55bax14, _0x55bax15, _0x55bax17[_0x55baxe + 11], 10, _0x55bax18[65]),
            _0x55bax15 = _0x55baxb(_0x55bax15, _0x55bax16, _0x55bax13, _0x55bax14, _0x55bax17[_0x55baxe + 2], 15, _0x55bax18[66]),
            _0x55bax14 = _0x55baxb(_0x55bax14, _0x55bax15, _0x55bax16, _0x55bax13, _0x55bax17[_0x55baxe + 9], 21, _0x55bax18[67]),
            _0x55bax13 = _0x55bax3(_0x55bax13, _0x55baxf),
            _0x55bax14 = _0x55bax3(_0x55bax14, _0x55bax10),
            _0x55bax15 = _0x55bax3(_0x55bax15, _0x55bax11),
            _0x55bax16 = _0x55bax3(_0x55bax16, _0x55bax12)
        }
        ;return _0x55baxd(_0x55bax13)['concat'](_0x55baxd(_0x55bax14), _0x55baxd(_0x55bax15), _0x55baxd(_0x55bax16))
    }
      , _0x55bax2a = function() {
        var _0x55bax1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
          , _0x55bax2 = _0x55bax1['split']('')
          , _0x55bax3 = function(_0x55bax1) {
            var _0x55bax3, _0x55bax4, _0x55bax5 = [], _0x55bax6 = '';
            for (Math['floor'](16 * _0x55bax1['length'] / 3),
            _0x55bax3 = 0; 16 * _0x55bax1['length'] > _0x55bax3; _0x55bax3++) {
                _0x55bax5['push'](_0x55bax1[Math['floor'](_0x55bax3 / 16)][_0x55bax3 % 16])
            }
            ;for (_0x55bax3 = 0; _0x55bax5['length'] > _0x55bax3; _0x55bax3 += 3) {
                _0x55bax6 += _0x55bax2[_0x55bax5[_0x55bax3] >> 2],
                _0x55bax6 += _0x55bax2[(3 & _0x55bax5[_0x55bax3]) << 4 | _0x55bax5[_0x55bax3 + 1] >> 4],
                _0x55bax6 += void (0) !== _0x55bax5[_0x55bax3 + 1] ? _0x55bax2[(15 & _0x55bax5[_0x55bax3 + 1]) << 2 | _0x55bax5[_0x55bax3 + 2] >> 6] : '=',
                _0x55bax6 += void (0) !== _0x55bax5[_0x55bax3 + 2] ? _0x55bax2[63 & _0x55bax5[_0x55bax3 + 2]] : '='
            }
            ;for (_0x55bax4 = _0x55bax6['slice'](0, 64) + '\x0A',
            _0x55bax3 = 1; Math['ceil'](_0x55bax6['length'] / 64) > _0x55bax3; _0x55bax3++) {
                _0x55bax4 += _0x55bax6['slice'](64 * _0x55bax3, 64 * _0x55bax3 + 64) + (Math['ceil'](_0x55bax6['length'] / 64) === _0x55bax3 + 1 ? '' : '\x0A')
            }
            ;return _0x55bax4
        }
          , _0x55bax4 = function(_0x55bax2) {
            _0x55bax2 = _0x55bax2['replace'](/\n/g, '');
            var _0x55bax3, _0x55bax4 = [], _0x55bax5 = [], _0x55bax6 = [];
            for (_0x55bax3 = 0; _0x55bax2['length'] > _0x55bax3; _0x55bax3 += 4) {
                _0x55bax5[0] = _0x55bax1['indexOf'](_0x55bax2['charAt'](_0x55bax3)),
                _0x55bax5[1] = _0x55bax1['indexOf'](_0x55bax2['charAt'](_0x55bax3 + 1)),
                _0x55bax5[2] = _0x55bax1['indexOf'](_0x55bax2['charAt'](_0x55bax3 + 2)),
                _0x55bax5[3] = _0x55bax1['indexOf'](_0x55bax2['charAt'](_0x55bax3 + 3)),
                _0x55bax6[0] = _0x55bax5[0] << 2 | _0x55bax5[1] >> 4,
                _0x55bax6[1] = (15 & _0x55bax5[1]) << 4 | _0x55bax5[2] >> 2,
                _0x55bax6[2] = (3 & _0x55bax5[2]) << 6 | _0x55bax5[3],
                _0x55bax4['push'](_0x55bax6[0], _0x55bax6[1], _0x55bax6[2])
            }
            ;return _0x55bax4 = _0x55bax4['slice'](0, _0x55bax4['length'] - _0x55bax4['length'] % 16)
        };
        return 'function' == typeof Array['indexOf'] && (_0x55bax1 = _0x55bax2),
        {
            encode: _0x55bax3,
            decode: _0x55bax4
        }
    }();
    return {
        size: _0x55baxb,
        h2a: _0x55bax9,
        expandKey: _0x55bax17,
        encryptBlock: _0x55bax10,
        decryptBlock: _0x55bax11,
        Decrypt: _0x55bax3,
        s2a: _0x55baxa,
        rawEncrypt: _0x55baxe,
        rawDecrypt: _0x55baxf,
        dec: _0x55bax28,
        openSSLKey: _0x55baxd,
        a2h: _0x55bax8,
        enc: _0x55bax27,
        Hash: {
            MD5: _0x55bax29
        },
        Base64: _0x55bax2a
    }
});
!function(_0x55bax1) {
    _0x55bax1['fn']['extend']({
        decode: function(_0x55bax2b) {
            return this['each'](function() {
                var _0x55bax2 = _0x55bax1(this)['attr']('src');
                if (_0x55bax2['indexOf']('http') == -1) {
                    t = GibberishAES['dec'](_0x55bax2, '4590481877' + _0x55bax2b);
                    _0x55bax1(this)['attr']('src', t)
                }
            })
        }
    })
}(jQuery);
function decodeLink(_0x55bax2d, _0x55bax2b) {
    return GibberishAES['dec'](_0x55bax2d, 'bilutv.com' + '4590481877' + _0x55bax2b)
}
