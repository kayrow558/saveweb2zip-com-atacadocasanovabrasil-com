import {
    r as _0xfe88bf,
    u as _0x4d15cb,
    j as _0x5d2e29,
    S as _0x414727,
    a as _0x7e9b6c,
    b as _0x207d72,
    R as _0x42599a,
    c as _0x589b7e,
    d as _0x55432e,
    E as _0x55425a,
    e as _0x31888c,
    f as _0x2ea4e1,
    g as _0x462fab,
    h as _0x248719,
    T as _0x392d39,
    i as _0xa3530a,
    k as _0x194cf3,
    l as _0xc47ffe,
    t as _0x460736,
    m as _0x205ea9,
    n as _0x4a602d,
    I as _0x21b916,
    o as _0x20aad8,
    F as _0x1ba483,
    p as _0x3c7ef8,
    q as _0x3ee37d
} from './bk-index-C5wI6sjV.js';
function w({
    reviewAmount: _0x32e1bb,
    averageRating: _0x1c1eb0
}) {
    const _0x401ad8 = _0xfe88bf['useRef'](null), _0x4be38f = _0x4d15cb(_0x401ad8);
    return _0x5d2e29['jsx']('div', {
        'ref': _0x401ad8,
        'className': 'tw-flex\x20tw-gap-2\x20\x20tw-text-black/80\x20tw-text-md',
        'style': { 'justifyContent': _0x4be38f },
        'children': _0x5d2e29['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x5d2e29['jsx'](_0x414727, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20mb-[1px]',
                    'averageRating': _0x1c1eb0
                }),
                _0x5d2e29['jsxs']('p', {
                    'className': 'tw-text-custom\x20tw-leading-[normal]',
                    'children': [
                        '(',
                        _0x32e1bb,
                        ')'
                    ]
                })
            ]
        })
    });
}
function Q({
    reviewAmount: _0x1cc165,
    averageRating: _0x24204c
}) {
    const _0x32ff94 = _0xfe88bf['useRef'](null), _0x1f9019 = _0x4d15cb(_0x32ff94);
    return _0x5d2e29['jsx']('div', {
        'ref': _0x32ff94,
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md\x20tw-items-center',
        'style': { 'justifyContent': _0x1f9019 },
        'children': _0x5d2e29['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x5d2e29['jsx'](_0x7e9b6c, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20tw-mb-[1px]',
                    'averageRating': _0x24204c
                }),
                _0x5d2e29['jsxs']('p', {
                    'className': 'tw-text-custom',
                    'children': [
                        '(',
                        _0x1cc165,
                        ')'
                    ]
                })
            ]
        })
    });
}
function X({
    theme: _0x29f021,
    componentProps: _0x4435a3
}) {
    const {
        reviewAmount: _0x1dcd22,
        averageRating: _0x176fb0
    } = _0x4435a3;
    return {
        'default': _0x5d2e29['jsx'](w, {
            'reviewAmount': _0x1dcd22,
            'averageRating': _0x176fb0
        }),
        'sol': _0x5d2e29['jsx'](w, {
            'reviewAmount': _0x1dcd22,
            'averageRating': _0x176fb0
        }),
        'classic': _0x5d2e29['jsx'](w, {
            'reviewAmount': _0x1dcd22,
            'averageRating': _0x176fb0
        }),
        'wide': _0x5d2e29['jsx'](w, {
            'reviewAmount': _0x1dcd22,
            'averageRating': _0x176fb0
        }),
        'piano': _0x5d2e29['jsx'](Q, {
            'reviewAmount': _0x1dcd22,
            'averageRating': _0x176fb0
        })
    }[_0x29f021];
}
function Y({
    theme: _0x4367f4,
    reviewAmount: _0x12b49e,
    averageRating: _0x542075
}) {
    const _0x1a41e2 = X({
        'theme': _0x4367f4,
        'componentProps': {
            'reviewAmount': _0x12b49e,
            'averageRating': _0x542075
        }
    });
    return _0x5d2e29['jsx']('div', {
        'className': 'tw-my-[0.75rem]',
        'children': _0x1a41e2
    });
}
const Z = async _0x6ab77e => {
        const _0x4b0574 = 'https://' + _0x6ab77e + '/products.json?limit=250', _0x8382a1 = 0x5, _0x417dad = 0x3;
        let _0x7c5045 = [], _0x2cc2f2 = !0x1;
        for (let _0xc745ec = 0x0; _0xc745ec < _0x417dad && (await Promise['all'](new Array(_0x8382a1)['fill'](0x0)['map'](async (_0x4cdf62, _0x573b04) => {
                const _0x4fed32 = _0x8382a1 * _0xc745ec + _0x573b04 + 0x1, _0x4a80fc = _0x4b0574 + '&page=' + _0x4fed32, _0x3ad269 = await _0x207d72['get'](_0x4a80fc);
                if (_0x3ad269['status'] !== 0xc8) {
                    console['error']('Failed\x20to\x20fetch\x20products\x20from\x20' + _0x4a80fc);
                    return;
                }
                const _0x273bc4 = _0x3ad269['data']['products'];
                _0x7c5045 = _0x7c5045['concat'](_0x273bc4), _0x273bc4['length'] < 0xfa && (_0x2cc2f2 = !0x0);
            })), !_0x2cc2f2); _0xc745ec++);
        return _0x7c5045;
    }, ee = (_0xc68b8c, _0x2f4334, _0x53c5af, _0x908c9b, _0x1d6986, _0x18a38c) => {
        const {
            averageRating: _0x29ad79,
            reviewAmount: _0x3d6ff2
        } = _0xc68b8c;
        if (_0x2f4334['querySelector']('.collection-star-section[data-product-id=\x22' + _0x908c9b + '\x22]') || _0x1d6986 && !_0x3d6ff2)
            return;
        const _0x25c250 = document['createElement']('div');
        if (_0x25c250['classList']['add']('collection-star-section', 'bk-reviews', _0x53c5af), _0x25c250['setAttribute']('data-product-id', _0x908c9b), _0x25c250['style']['textAlign'] = 'inherit', _0x18a38c === 'nuvemshop' && (_0x2f4334 = _0x2f4334['querySelector']('.item-link'), !_0x2f4334))
            return;
        _0x2f4334['style']['margin'] = '0';
        const _0x4ff000 = _0x2f4334['parentElement'];
        if (!_0x4ff000)
            return;
        const _0x46efa6 = _0x2f4334['nextElementSibling'];
        _0x46efa6 ? (_0x46efa6['style']['setProperty']('margin-top', '0'), _0x4ff000['insertBefore'](_0x25c250, _0x46efa6)) : _0x4ff000['appendChild'](_0x25c250), _0x55432e['render'](_0x5d2e29['jsx'](Y, {
            'theme': _0x53c5af,
            'averageRating': _0x29ad79,
            'reviewAmount': _0x3d6ff2
        }), _0x25c250);
    }, te = async (_0x621886, _0x3f4a40) => {
        const _0xa5d70b = new Map();
        return _0x621886['forEach'](_0x4144dd => {
            _0xa5d70b['set'](_0x4144dd['handle'], _0x4144dd['id']);
        }), _0xa5d70b;
    }, oe = async (_0x246933, _0x3bf9b3, _0x19483a, _0x3d22ec, _0x41af53, _0x53d6b3) => {
        const _0x3b0a8c = new Map();
        _0x246933['forEach'](_0x57a7d2 => {
            _0x3b0a8c['set'](_0x57a7d2['productId'], _0x57a7d2);
        }), await Promise['all'](_0x3bf9b3['map'](async _0xa4a279 => {
            var _0x52e9ce, _0x3311ea;
            let _0x1606df;
            if (_0x53d6b3 === 'nuvemshop')
                _0x1606df = _0xa4a279['getAttribute']('data-product-id') ?? void 0x0;
            else {
                const _0xd3268a = (_0x52e9ce = decodeURIComponent(_0xa4a279['getAttribute']('href') ?? '')['split']('/products/')[0x1]) == null ? void 0x0 : _0x52e9ce['split']('?')[0x0];
                if (!_0xd3268a)
                    return;
                _0x1606df = _0x19483a['get'](_0xd3268a);
            }
            const _0x4d0769 = _0x1606df ? _0x3b0a8c['get'](String(_0x1606df)) : null;
            if (!((_0x3311ea = _0xa4a279['parentElement']) != null && _0x3311ea['querySelector']('.collection-star-section[data-product-id=\x22' + _0x1606df + '\x22]')) && _0x4d0769) {
                ee(_0x4d0769, _0xa4a279, _0x3d22ec, String(_0x1606df), _0x41af53, _0x53d6b3), await Promise['resolve']();
                return;
            }
        })), _0x53d6b3 || ae();
    }, ne = (_0x286016, _0x4453ad) => {
        let _0x5e49f4 = [];
        const _0x736740 = [
                '.shopify-section[id*=\x22recently-viewed-products\x22]',
                '.shopify-section[id*=\x22recommendations\x22]',
                '.shopify-section[id*=\x22promotions\x22]'
            ], _0x4d2f37 = _0x4453ad === 'nuvemshop' ? ['div[data-product-id]'] : [
                'a[href*=\x22/products/\x22][class*=\x22title\x22]',
                '[class*=\x22title\x22]\x20a[href*=\x22/products/\x22]',
                'a[href*=\x22/products/\x22][id*=\x22CardLink\x22]',
                'a[href*=\x22/products/\x22][class*=\x22product-link\x22]',
                'a[href*=\x22/products/\x22][class*=\x22link\x22]'
            ];
        let _0x1ebda4 = _0x4d2f37;
        if (_0x286016) {
            let _0x4ae22a;
            for (const _0x4f2433 of _0x4d2f37)
                if (document['querySelector'](_0x4f2433)) {
                    _0x4ae22a = _0x4f2433;
                    break;
                }
            if (!_0x4ae22a)
                return [];
            _0x1ebda4 = _0x736740['map'](_0x1b599e => _0x1b599e + '\x20' + _0x4ae22a);
        }
        for (const _0x60dafd of _0x1ebda4)
            if (_0x5e49f4 = document['querySelectorAll'](_0x60dafd), _0x5e49f4['length'])
                break;
        return Array['from'](_0x5e49f4)['filter'](_0x4fb80b => _0x4fb80b instanceof HTMLElement);
    }, se = _0x5b1770 => {
        const _0x2725de = new Set();
        return _0x5b1770['forEach'](_0x241d86 => {
            var _0x4dc0d4;
            const _0x1b62ac = (_0x4dc0d4 = decodeURIComponent(_0x241d86['getAttribute']('href') ?? '')['split']('/products/')[0x1]) == null ? void 0x0 : _0x4dc0d4['split']('?')[0x0];
            _0x1b62ac && _0x2725de['add'](_0x1b62ac);
        }), _0x2725de;
    }, re = (_0x345db8, _0x2f79f2) => {
        const _0x107d1c = [];
        for (const _0x462e15 of _0x2f79f2)
            _0x345db8['has'](_0x462e15['handle']) && _0x107d1c['push'](_0x462e15);
        return _0x107d1c;
    }, ce = _0x2d3f84 => _0x2d3f84['map'](_0x26cc02 => _0x26cc02['id'])['sort']((_0xee6e9e, _0x53b8a6) => Number(_0x53b8a6) - Number(_0xee6e9e)), ie = (_0x591ade, _0x465cf1) => new _0x42599a(_0x591ade[0x0], _0x465cf1, _0x589b7e)['getCollectionStatistics'](_0x591ade), ae = () => {
        const _0x21a125 = [], _0x30c218 = [
                '.flickity-viewport:has(.collection-star-section)',
                '.product-list:has(.collection-star-section)'
            ];
        for (const _0x3051a2 of _0x30c218) {
            const _0xe65990 = document['querySelectorAll'](_0x3051a2);
            _0x21a125['push'](..._0xe65990);
        }
        _0x21a125['length'] && _0x21a125['forEach'](_0x2d7b26 => {
            const _0x3dacde = _0x2d7b26['querySelector']('.flickity-slider\x20>\x20div');
            if (!_0x3dacde)
                return;
            const _0x2ac86a = _0x3dacde['offsetHeight'], _0x2cd1a4 = _0x2d7b26['offsetHeight'];
            _0x2ac86a > _0x2cd1a4 && (_0x2d7b26['style']['height'] = _0x2ac86a + 'px');
        });
    };
let b;
const E = new Map(), le = async (_0x190905, _0x4967f4, _0x5225de) => {
        let _0x5814a2, _0x20c22b = [], _0x39ef36 = [];
        if (_0x5225de === 'nuvemshop')
            _0x20c22b = _0x190905['map'](_0x3deee0 => _0x3deee0['getAttribute']('data-product-id') ?? ''), _0x5814a2 = _0x20c22b['toString'](), _0x39ef36 = _0x20c22b['map'](_0x5b863f => ({
                'id': _0x5b863f,
                'handle': _0x5b863f
            }));
        else {
            const _0x1599e3 = se(_0x190905);
            b || (b = await Z(_0x4967f4)), _0x39ef36 = re(_0x1599e3, b), _0x20c22b = ce(_0x39ef36), _0x5814a2 = _0x20c22b['toString']();
        }
        const _0x32fd6d = await te(_0x39ef36);
        return E['get'](_0x5814a2) || E['set'](_0x5814a2, await ie(_0x20c22b, _0x4967f4)), {
            'statistics': E['get'](_0x5814a2),
            'productMap': _0x32fd6d
        };
    };
async function de(_0x356cd9, _0xe853a5, _0x220a15, _0x1103f4 = !0x1, _0x349408 = !0x0, _0x5091d4) {
    const _0x1b3d9d = ne(_0x356cd9, _0x5091d4), {
            statistics: _0x302c32,
            productMap: _0x357b71
        } = await le(_0x1b3d9d, _0xe853a5, _0x5091d4);
    _0x349408 && _0x220a15 && _0x302c32 && _0x357b71 && oe(_0x302c32, _0x1b3d9d, _0x357b71, _0x220a15, _0x1103f4, _0x5091d4);
}
const ue = _0x1ff07b => _0x1ff07b['filter'](_0x3a04e5 => _0x3a04e5 !== null)['sort']((_0x4a913e, _0x42cf50) => !_0x4a913e || !_0x42cf50 ? 0x0 : _0x4a913e['compareDocumentPosition'](_0x42cf50) & Node['DOCUMENT_POSITION_FOLLOWING'] ? -0x1 : 0x1)['at'](0x0), me = _0x5bf7f8 => {
        var _0x1fc186, _0xda10cf;
        const _0x1761a1 = document['getElementById']('bk-review-section'), _0x682256 = document['getElementById']('auto-bk-review-section');
        if (_0x1761a1 || _0x682256) {
            console['log']('returned\x20because\x20already\x20review\x20section');
            return;
        }
        let _0x3659ba;
        const _0x2c84b5 = document['querySelectorAll']('.shopify-section[id*=\x22template\x22]');
        for (const _0x871a58 of _0x2c84b5)
            if (_0x871a58['querySelector']('h1') || _0x871a58['querySelector']('h2')) {
                _0x3659ba = _0x871a58;
                break;
            }
        const _0x53d71f = document['querySelector']('[data-store*=\x22product-detail\x22]');
        _0x53d71f && (_0x3659ba = _0x53d71f);
        const _0x3f4b8a = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]'), _0x25f975 = _0x3659ba ? _0x3659ba['parentNode'] : _0x3f4b8a, _0x9bd7ff = document['createElement']('div');
        _0x9bd7ff['classList']['add']('bk-reviews', _0x5bf7f8), _0x9bd7ff['style']['width'] = '100%', _0x9bd7ff['style']['height'] = 'fit-content', _0x9bd7ff['id'] = 'auto-bk-review-section';
        const _0x4d9640 = document['querySelector']('.container--flush'), _0x15b542 = document['querySelector']('.shopify-section[id*=\x22recently-viewed-products\x22]'), _0x34bf51 = document['querySelector']('.shopify-section[id*=\x22recommendations\x22]'), _0x25c434 = document['querySelector']('product-recommendations'), _0xeb8fee = document['querySelector']('.shopify-section[id*=\x22promotions\x22]'), _0x46671b = document['querySelector']('.shopify-section[id*=\x22product-content\x22]'), _0x5c1842 = document['querySelector']('.shopify-section[id*=\x22information-tabs\x22]'), _0x6ef925 = ue([
                _0x15b542,
                _0x34bf51,
                _0x25c434,
                _0xeb8fee
            ]), _0x568ceb = _0x6ef925 == null ? void 0x0 : _0x6ef925['parentNode'];
        _0x6ef925 && _0x568ceb ? (console['log']('insertBeforeSection', _0x6ef925), _0x568ceb['insertBefore'](_0x9bd7ff, _0x6ef925)) : _0x46671b != null && _0x46671b['nextElementSibling'] ? (console['log']('productSection', _0x46671b), (_0x1fc186 = _0x46671b['parentNode']) == null || _0x1fc186['insertBefore'](_0x9bd7ff, _0x46671b['nextElementSibling'])) : _0x5c1842 != null && _0x5c1842['nextElementSibling'] ? (console['log']('informationTabsSection', _0x5c1842), (_0xda10cf = _0x5c1842['parentNode']) == null || _0xda10cf['insertBefore'](_0x9bd7ff, _0x5c1842['nextElementSibling'])) : _0x4d9640 != null && _0x4d9640['parentNode'] && _0x4d9640['nextElementSibling'] ? (console['log']('containerFlush', _0x4d9640), _0x4d9640['parentNode']['insertBefore'](_0x9bd7ff, _0x4d9640['nextElementSibling'])) : _0x3659ba ? _0x3659ba['nextElementSibling'] ? (console['log']('after\x20targetSection'), _0x25f975 == null || _0x25f975['insertBefore'](_0x9bd7ff, _0x3659ba['nextElementSibling'])) : (console['log']('child\x20of\x20targetSectionParent'), _0x25f975 == null || _0x25f975['appendChild'](_0x9bd7ff)) : _0x3f4b8a ? (console['log']('child\x20of\x20mainSection'), _0x3f4b8a['appendChild'](_0x9bd7ff)) : console['log']('no\x20section\x20found'), _0x55432e['render'](_0x5d2e29['jsx'](_0x55425a, {
            'theme': _0x5bf7f8,
            'extension': 'review-section'
        }), _0x9bd7ff);
    }, fe = _0x1446ea => {
        const _0x254352 = document['getElementById']('bk-star-section'), _0x46c5f7 = document['getElementById']('auto-bk-star-section');
        if (_0x254352 || _0x46c5f7) {
            console['log']('returned\x20because\x20already\x20star\x20section');
            return;
        }
        const _0x4631ba = document['querySelector']('form#product-form\x20>\x20div.flex.flex-col.gap-4\x20>\x20div') ?? document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]'), _0x1f4eda = [document['querySelector']('[data-store*=”product-name-”]') ?? (_0x4631ba == null ? void 0x0 : _0x4631ba['querySelector']('h1')) ?? document['querySelector']('h1') ?? (_0x4631ba == null ? void 0x0 : _0x4631ba['querySelector']('h2')) ?? document['querySelector']('h2')];
        document['querySelectorAll']('.small--hide\x20h1,\x20.small--hide\x20h2')['forEach'](_0x1a74a6 => {
            _0x1f4eda['push'](_0x1a74a6);
        }), _0x1f4eda['forEach'](_0x487162 => {
            const _0x54ed89 = _0x487162 == null ? void 0x0 : _0x487162['parentElement'], _0x55e72c = document['createElement']('div');
            _0x55e72c['classList']['add']('bk-reviews', _0x1446ea), _0x55e72c['id'] = 'auto-bk-star-section', _0x487162 && _0x54ed89 && (_0x487162['style']['marginBottom'] = '0', _0x54ed89['insertBefore'](_0x55e72c, _0x487162['nextSibling']), _0x55432e['render'](_0x5d2e29['jsx'](_0x55425a, {
                'theme': _0x1446ea,
                'extension': 'star-section'
            }), _0x55e72c));
        });
    };
function pe(_0x2d8eee, _0x2a37b9) {
    const _0x3a841e = new MutationObserver(_0x2a37b9);
    return _0x3a841e['observe'](_0x2d8eee, {
        'childList': !0x0,
        'subtree': !0x0
    }), _0x3a841e;
}
function Se() {
    const _0x12779b = _0x31888c(), _0x449f94 = _0x2ea4e1(_0x12779b), _0x22d456 = _0x462fab(_0x12779b), {reviewStatistics: _0x52ad0d} = _0xfe88bf['useContext'](_0x248719), {
            theme: _0x421b81,
            themePreferences: _0x49c5fc
        } = _0xfe88bf['useContext'](_0x392d39), _0xd7da00 = _0xa3530a(_0x460736);
    _0x194cf3(), _0xc47ffe(_0x421b81, _0x49c5fc, _0xd7da00);
    const _0x3c6f42 = !(_0x52ad0d != null && _0x52ad0d['reviewAmount']) && (_0x49c5fc == null ? void 0x0 : _0x49c5fc['starsWithoutReviews']) === !0x1;
    return _0xfe88bf['useEffect'](() => {
        if (!_0x449f94 || !_0x49c5fc)
            return;
        ((async () => {
            const _0x51ded6 = () => de(!!_0x22d456, _0x449f94, _0x421b81 || '', _0x49c5fc['starsWithoutReviews'] === !0x1, _0x49c5fc['starsInBox'] !== !0x1, _0x12779b);
            _0x51ded6(), setTimeout(() => pe(window['document']['body'], _0x51ded6), 0x3e8);
        })());
    }, [
        _0x12779b,
        _0x22d456,
        _0x449f94,
        _0x421b81,
        _0x49c5fc
    ]), _0xfe88bf['useEffect'](() => {
        var _0x106736;
        _0x449f94 && _0x22d456 && _0x421b81 && _0x52ad0d && ((_0x106736 = document['querySelector']('#bk-reviews-root')) == null || _0x106736['setAttribute']('data-theme', _0x421b81), _0x3c6f42 || (fe(_0x421b81), me(_0x421b81)));
    }, [
        _0x421b81,
        _0x52ad0d,
        _0x449f94,
        _0x22d456,
        _0x3c6f42
    ]), !0x1 && _0x421b81 !== void 0x0 ? _0x5d2e29['jsxs'](_0x5d2e29['Fragment'], {
        'children': [
            _0x5d2e29['jsx'](_0x55425a, {
                'theme': _0x421b81,
                'extension': 'star-section'
            }),
            _0x5d2e29['jsx'](_0x55425a, {
                'theme': _0x421b81,
                'extension': 'review-section'
            })
        ]
    }) : null;
}
_0x205ea9['createRoot'](document['getElementById']('bk-reviews-root'))['render'](_0x5d2e29['jsx'](_0x4a602d['StrictMode'], {
    'children': _0x5d2e29['jsx'](_0x21b916, {
        'i18n': _0x20aad8,
        'children': _0x5d2e29['jsx'](_0x1ba483, { 'children': _0x5d2e29['jsx'](_0x3c7ef8, { 'children': _0x5d2e29['jsx'](_0x3ee37d, { 'children': _0x5d2e29['jsx'](Se, {}) }) }) })
    })
}));