#include <iostream>
#include <algorithm>
#include <vector>
#include <stack>
#include <queue>
#include <set>
#include <unordered_set>
#include <unordered_map>
#include <tuple>
#include <map>
#include <string>
#include <cmath>
#define ll long long
#define weight first
#define val second
#define INF 987654321987654321
#define MAX 4'000'005
//#define MOD 1'000'000'007
using namespace std;

struct Poll {
    ll x, y;
};

void fastIO() {
    std::ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

ll getCCW(Poll &p1, Poll &p2, Poll &p3) {
    ll ret = p1.x * p2.y + p2.x*p3.y + p3.x*p1.y - p2.x*p1.y - p3.x*p2.y - p1.x*p3.y;
    return ((ret == 0) ? 0 : ret / abs(ret));
}

void result() {
    Poll p1, p2, p3, p4;
    cin>>p1.x>>p1.y>>p2.x>>p2.y>>p3.x>>p3.y>>p4.x>>p4.y;
    ll ret1 = getCCW(p1, p2, p3);
    ll ret2 = getCCW(p1, p2, p4);
    ll ret3 = getCCW(p3, p4, p1);
    ll ret4 = getCCW(p3, p4, p2);
    //cout << ret1 << ' ' << ret2 << ' ' << ret3 << ' '<< ret4 <<'\n';
    //cout << (ret1 * ret2) << ' ' << (ret3 * ret4) << '\n';
    cout << ((ret1 * ret2 < 0) && (ret3 * ret4 < 0) ? 1 : 0);
}

int main() {
    fastIO();
    result();
    return 0;
}