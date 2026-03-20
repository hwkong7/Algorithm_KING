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
#define MOD 1'000'000'007
#define MAX 10000
//this is not for development, but for PS.
//this line is super critical for development.

using namespace std;

ll n;
void fastIO() {
    std::ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

void result() {
    cin>>n;

    ll prev = 1;
    ll next = 1;
    for(int i=0; i<n-2; i++) {
        ll tmp = next;
        ll res = (prev + next) % MOD;
        prev = tmp;
        next = res;
    }

    cout << next << ' ' << n - 2;
}


int main(){
    fastIO();
    result();
    return 0;
}

