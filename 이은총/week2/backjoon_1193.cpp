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
#define value first
#define name second
#define INF 987654321987654321
#define MAX 4'000'005
//#define MOD 1'000'000'007
using namespace std;

void fastIO() {
    std::ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

void result() {
    ll num;
    cin>>num;

    if (num == 1) {cout << "1/1"; return;}
    num--;
    ll pret = 0;
    ll target = 0;
    while (pret <= num) {
        target++;
        pret = target * (target+1) / 2;
    }
    target--;
    pret = target * (target+1) / 2;
    ll idx = num - pret;
    target++;
    if (target & 1) {
        cout << abs(target - idx) << '/' << idx + 1<< '\n';
    }
    else {
        cout << idx + 1 << '/' << abs(target - idx)<< '\n';
    }
}

int main() {
    fastIO();
    result();
    return 0;
}