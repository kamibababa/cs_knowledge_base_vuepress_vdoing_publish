(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{594:function(n,s,a){"use strict";a.r(s);var r=a(14),t=Object(r.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("div",{staticClass:"language-c++ line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('#include <iostream>\n#include <vector>\n#include <ctime>\n#include <cstdlib>\n#include <algorithm>\n\nusing namespace std;\n\n// 扑克牌的花色\nenum Suit {HEARTS, DIAMONDS, CLUBS, SPADES};\n// 扑克牌的点数\nenum Rank {TWO = 2, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE};\n\n// 卡牌结构\nstruct Card {\n    Rank rank;\n    Suit suit;\n};\n\n// 打印花色\nstring suitToString(Suit suit) {\n    switch (suit) {\n        case HEARTS: return "Hearts";\n        case DIAMONDS: return "Diamonds";\n        case CLUBS: return "Clubs";\n        case SPADES: return "Spades";\n        default: return "";\n    }\n}\n\n// 打印点数\nstring rankToString(Rank rank) {\n    switch (rank) {\n        case TWO: return "2"; case THREE: return "3"; case FOUR: return "4"; case FIVE: return "5";\n        case SIX: return "6"; case SEVEN: return "7"; case EIGHT: return "8"; case NINE: return "9";\n        case TEN: return "10"; case JACK: return "J"; case QUEEN: return "Q"; case KING: return "K"; case ACE: return "A";\n        default: return "";\n    }\n}\n\n// 生成一副牌\nvector<Card> generateDeck() {\n    vector<Card> deck;\n    for (int suit = 0; suit < 4; ++suit) {\n        for (int rank = TWO; rank <= ACE; ++rank) {\n            deck.push_back({static_cast<Rank>(rank), static_cast<Suit>(suit)});\n        }\n    }\n    return deck;\n}\n\n// 洗牌\nvoid shuffleDeck(vector<Card>& deck) {\n    srand(static_cast<unsigned int>(time(0)));\n    for (int i = 0; i < deck.size(); ++i) {\n        int randIndex = rand() % deck.size();\n        swap(deck[i], deck[randIndex]);\n    }\n}\n\n// 发牌\nvector<Card> dealHand(vector<Card>& deck) {\n    vector<Card> hand;\n    for (int i = 0; i < 5; ++i) {\n        hand.push_back(deck.back());\n        deck.pop_back();\n    }\n    return hand;\n}\n\n// 打印手牌\nvoid printHand(const vector<Card>& hand) {\n    for (const auto& card : hand) {\n        cout << rankToString(card.rank) << " of " << suitToString(card.suit) << endl;\n    }\n}\n\n// 计算手牌的类型\n// 判断手牌是否是对子、三条、顺子、同花、四条等\nbool isPair(const vector<Card>& hand) {\n    vector<int> counts(15, 0);\n    for (const auto& card : hand) {\n        counts[card.rank]++;\n    }\n    for (int count : counts) {\n        if (count == 2) return true;\n    }\n    return false;\n}\n\nbool isTwoPair(const vector<Card>& hand) {\n    vector<int> counts(15, 0);\n    for (const auto& card : hand) {\n        counts[card.rank]++;\n    }\n    int pairs = 0;\n    for (int count : counts) {\n        if (count == 2) pairs++;\n    }\n    return pairs == 2;\n}\n\nbool isThreeOfAKind(const vector<Card>& hand) {\n    vector<int> counts(15, 0);\n    for (const auto& card : hand) {\n        counts[card.rank]++;\n    }\n    for (int count : counts) {\n        if (count == 3) return true;\n    }\n    return false;\n}\n\nbool isStraight(const vector<Card>& hand) {\n    vector<int> ranks;\n    for (const auto& card : hand) {\n        ranks.push_back(card.rank);\n    }\n    sort(ranks.begin(), ranks.end());\n\n    // 处理Ace的情况：Ace可以算作1\n    if (ranks[0] == TWO && ranks[1] == THREE && ranks[2] == FOUR && ranks[3] == FIVE && ranks[4] == ACE) {\n        return true;\n    }\n\n    for (int i = 1; i < 5; ++i) {\n        if (ranks[i] != ranks[i - 1] + 1) {\n            return false;\n        }\n    }\n    return true;\n}\n\nbool isFlush(const vector<Card>& hand) {\n    Suit firstSuit = hand[0].suit;\n    for (const auto& card : hand) {\n        if (card.suit != firstSuit) return false;\n    }\n    return true;\n}\n\nbool isFullHouse(const vector<Card>& hand) {\n    vector<int> counts(15, 0);\n    for (const auto& card : hand) {\n        counts[card.rank]++;\n    }\n    bool threeOfAKind = false, pair = false;\n    for (int count : counts) {\n        if (count == 3) threeOfAKind = true;\n        if (count == 2) pair = true;\n    }\n    return threeOfAKind && pair;\n}\n\nbool isFourOfAKind(const vector<Card>& hand) {\n    vector<int> counts(15, 0);\n    for (const auto& card : hand) {\n        counts[card.rank]++;\n    }\n    for (int count : counts) {\n        if (count == 4) return true;\n    }\n    return false;\n}\n\nbool isStraightFlush(const vector<Card>& hand) {\n    return isStraight(hand) && isFlush(hand);\n}\n\nbool isRoyalFlush(const vector<Card>& hand) {\n    return isStraightFlush(hand) && hand[0].rank == TEN;\n}\n\n// 评估手牌并返回得分\nint evaluateHand(const vector<Card>& hand) {\n    if (isRoyalFlush(hand)) return 800; // 皇家同花顺\n    if (isStraightFlush(hand)) return 50; // 同花顺\n    if (isFourOfAKind(hand)) return 25; // 四条\n    if (isFullHouse(hand)) return 9; // 葫芦\n    if (isFlush(hand)) return 6; // 同花\n    if (isStraight(hand)) return 4; // 顺子\n    if (isThreeOfAKind(hand)) return 3; // 三条\n    if (isTwoPair(hand)) return 2; // 两对\n    if (isPair(hand)) return 1; // 一对\n    return 0; // 无牌型\n}\n\nint main() {\n    vector<Card> deck = generateDeck();\n    shuffleDeck(deck);\n\n    cout << "Welcome to Jacks or Better Video Poker!" << endl;\n\n    // 发牌\n    vector<Card> hand = dealHand(deck);\n\n    // 打印手牌\n    cout << "Your hand is:" << endl;\n    printHand(hand);\n\n    // 评估手牌并给出得分\n    int score = evaluateHand(hand);\n    if (score > 0) {\n        cout << "You have a valid hand with a score of " << score << "!" << endl;\n    } else {\n        cout << "You don\'t have a valid hand." << endl;\n    }\n\n    return 0;\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br"),s("span",{staticClass:"line-number"},[n._v("85")]),s("br"),s("span",{staticClass:"line-number"},[n._v("86")]),s("br"),s("span",{staticClass:"line-number"},[n._v("87")]),s("br"),s("span",{staticClass:"line-number"},[n._v("88")]),s("br"),s("span",{staticClass:"line-number"},[n._v("89")]),s("br"),s("span",{staticClass:"line-number"},[n._v("90")]),s("br"),s("span",{staticClass:"line-number"},[n._v("91")]),s("br"),s("span",{staticClass:"line-number"},[n._v("92")]),s("br"),s("span",{staticClass:"line-number"},[n._v("93")]),s("br"),s("span",{staticClass:"line-number"},[n._v("94")]),s("br"),s("span",{staticClass:"line-number"},[n._v("95")]),s("br"),s("span",{staticClass:"line-number"},[n._v("96")]),s("br"),s("span",{staticClass:"line-number"},[n._v("97")]),s("br"),s("span",{staticClass:"line-number"},[n._v("98")]),s("br"),s("span",{staticClass:"line-number"},[n._v("99")]),s("br"),s("span",{staticClass:"line-number"},[n._v("100")]),s("br"),s("span",{staticClass:"line-number"},[n._v("101")]),s("br"),s("span",{staticClass:"line-number"},[n._v("102")]),s("br"),s("span",{staticClass:"line-number"},[n._v("103")]),s("br"),s("span",{staticClass:"line-number"},[n._v("104")]),s("br"),s("span",{staticClass:"line-number"},[n._v("105")]),s("br"),s("span",{staticClass:"line-number"},[n._v("106")]),s("br"),s("span",{staticClass:"line-number"},[n._v("107")]),s("br"),s("span",{staticClass:"line-number"},[n._v("108")]),s("br"),s("span",{staticClass:"line-number"},[n._v("109")]),s("br"),s("span",{staticClass:"line-number"},[n._v("110")]),s("br"),s("span",{staticClass:"line-number"},[n._v("111")]),s("br"),s("span",{staticClass:"line-number"},[n._v("112")]),s("br"),s("span",{staticClass:"line-number"},[n._v("113")]),s("br"),s("span",{staticClass:"line-number"},[n._v("114")]),s("br"),s("span",{staticClass:"line-number"},[n._v("115")]),s("br"),s("span",{staticClass:"line-number"},[n._v("116")]),s("br"),s("span",{staticClass:"line-number"},[n._v("117")]),s("br"),s("span",{staticClass:"line-number"},[n._v("118")]),s("br"),s("span",{staticClass:"line-number"},[n._v("119")]),s("br"),s("span",{staticClass:"line-number"},[n._v("120")]),s("br"),s("span",{staticClass:"line-number"},[n._v("121")]),s("br"),s("span",{staticClass:"line-number"},[n._v("122")]),s("br"),s("span",{staticClass:"line-number"},[n._v("123")]),s("br"),s("span",{staticClass:"line-number"},[n._v("124")]),s("br"),s("span",{staticClass:"line-number"},[n._v("125")]),s("br"),s("span",{staticClass:"line-number"},[n._v("126")]),s("br"),s("span",{staticClass:"line-number"},[n._v("127")]),s("br"),s("span",{staticClass:"line-number"},[n._v("128")]),s("br"),s("span",{staticClass:"line-number"},[n._v("129")]),s("br"),s("span",{staticClass:"line-number"},[n._v("130")]),s("br"),s("span",{staticClass:"line-number"},[n._v("131")]),s("br"),s("span",{staticClass:"line-number"},[n._v("132")]),s("br"),s("span",{staticClass:"line-number"},[n._v("133")]),s("br"),s("span",{staticClass:"line-number"},[n._v("134")]),s("br"),s("span",{staticClass:"line-number"},[n._v("135")]),s("br"),s("span",{staticClass:"line-number"},[n._v("136")]),s("br"),s("span",{staticClass:"line-number"},[n._v("137")]),s("br"),s("span",{staticClass:"line-number"},[n._v("138")]),s("br"),s("span",{staticClass:"line-number"},[n._v("139")]),s("br"),s("span",{staticClass:"line-number"},[n._v("140")]),s("br"),s("span",{staticClass:"line-number"},[n._v("141")]),s("br"),s("span",{staticClass:"line-number"},[n._v("142")]),s("br"),s("span",{staticClass:"line-number"},[n._v("143")]),s("br"),s("span",{staticClass:"line-number"},[n._v("144")]),s("br"),s("span",{staticClass:"line-number"},[n._v("145")]),s("br"),s("span",{staticClass:"line-number"},[n._v("146")]),s("br"),s("span",{staticClass:"line-number"},[n._v("147")]),s("br"),s("span",{staticClass:"line-number"},[n._v("148")]),s("br"),s("span",{staticClass:"line-number"},[n._v("149")]),s("br"),s("span",{staticClass:"line-number"},[n._v("150")]),s("br"),s("span",{staticClass:"line-number"},[n._v("151")]),s("br"),s("span",{staticClass:"line-number"},[n._v("152")]),s("br"),s("span",{staticClass:"line-number"},[n._v("153")]),s("br"),s("span",{staticClass:"line-number"},[n._v("154")]),s("br"),s("span",{staticClass:"line-number"},[n._v("155")]),s("br"),s("span",{staticClass:"line-number"},[n._v("156")]),s("br"),s("span",{staticClass:"line-number"},[n._v("157")]),s("br"),s("span",{staticClass:"line-number"},[n._v("158")]),s("br"),s("span",{staticClass:"line-number"},[n._v("159")]),s("br"),s("span",{staticClass:"line-number"},[n._v("160")]),s("br"),s("span",{staticClass:"line-number"},[n._v("161")]),s("br"),s("span",{staticClass:"line-number"},[n._v("162")]),s("br"),s("span",{staticClass:"line-number"},[n._v("163")]),s("br"),s("span",{staticClass:"line-number"},[n._v("164")]),s("br"),s("span",{staticClass:"line-number"},[n._v("165")]),s("br"),s("span",{staticClass:"line-number"},[n._v("166")]),s("br"),s("span",{staticClass:"line-number"},[n._v("167")]),s("br"),s("span",{staticClass:"line-number"},[n._v("168")]),s("br"),s("span",{staticClass:"line-number"},[n._v("169")]),s("br"),s("span",{staticClass:"line-number"},[n._v("170")]),s("br"),s("span",{staticClass:"line-number"},[n._v("171")]),s("br"),s("span",{staticClass:"line-number"},[n._v("172")]),s("br"),s("span",{staticClass:"line-number"},[n._v("173")]),s("br"),s("span",{staticClass:"line-number"},[n._v("174")]),s("br"),s("span",{staticClass:"line-number"},[n._v("175")]),s("br"),s("span",{staticClass:"line-number"},[n._v("176")]),s("br"),s("span",{staticClass:"line-number"},[n._v("177")]),s("br"),s("span",{staticClass:"line-number"},[n._v("178")]),s("br"),s("span",{staticClass:"line-number"},[n._v("179")]),s("br"),s("span",{staticClass:"line-number"},[n._v("180")]),s("br"),s("span",{staticClass:"line-number"},[n._v("181")]),s("br"),s("span",{staticClass:"line-number"},[n._v("182")]),s("br"),s("span",{staticClass:"line-number"},[n._v("183")]),s("br"),s("span",{staticClass:"line-number"},[n._v("184")]),s("br"),s("span",{staticClass:"line-number"},[n._v("185")]),s("br"),s("span",{staticClass:"line-number"},[n._v("186")]),s("br"),s("span",{staticClass:"line-number"},[n._v("187")]),s("br"),s("span",{staticClass:"line-number"},[n._v("188")]),s("br"),s("span",{staticClass:"line-number"},[n._v("189")]),s("br"),s("span",{staticClass:"line-number"},[n._v("190")]),s("br"),s("span",{staticClass:"line-number"},[n._v("191")]),s("br"),s("span",{staticClass:"line-number"},[n._v("192")]),s("br"),s("span",{staticClass:"line-number"},[n._v("193")]),s("br"),s("span",{staticClass:"line-number"},[n._v("194")]),s("br"),s("span",{staticClass:"line-number"},[n._v("195")]),s("br"),s("span",{staticClass:"line-number"},[n._v("196")]),s("br"),s("span",{staticClass:"line-number"},[n._v("197")]),s("br"),s("span",{staticClass:"line-number"},[n._v("198")]),s("br"),s("span",{staticClass:"line-number"},[n._v("199")]),s("br"),s("span",{staticClass:"line-number"},[n._v("200")]),s("br"),s("span",{staticClass:"line-number"},[n._v("201")]),s("br"),s("span",{staticClass:"line-number"},[n._v("202")]),s("br"),s("span",{staticClass:"line-number"},[n._v("203")]),s("br"),s("span",{staticClass:"line-number"},[n._v("204")]),s("br"),s("span",{staticClass:"line-number"},[n._v("205")]),s("br"),s("span",{staticClass:"line-number"},[n._v("206")]),s("br"),s("span",{staticClass:"line-number"},[n._v("207")]),s("br"),s("span",{staticClass:"line-number"},[n._v("208")]),s("br"),s("span",{staticClass:"line-number"},[n._v("209")]),s("br"),s("span",{staticClass:"line-number"},[n._v("210")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);