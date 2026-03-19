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
#define MOD 1'000'000'007
using namespace std;

vector<ll> v;
ll modpow(ll base, ll exp) {
    ll res = 1;
    while (exp) {
        if (exp & 1) res = res * base % MOD;
        base = base * base % MOD;
        exp >>= 1;
    }
    return res;
}

ll modinv(ll x) {
    return modpow(x, MOD - 2);
}

ll ncr(ll N, ll K) {
    if (K < 0 || K > N) return 0;
    if (K == 0 || K == N) return 1;
    K = min(K, N - K);
    //cout << v[N] << " / (" << v[K] << '*' << v[N-K] << ")\n";
    ll ret = v[N];
    ret *= modinv(v[K]); ret %= MOD;
    ret *= modinv(v[N-K]); ret %= MOD;
    return ret;
}

void fastIO() {
    std::ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

void preCompute() {
    v.resize(MAX);
    v[1] = 1;
    for (int i=2; i<=MAX; i++) {
        v[i] = (v[i-1] * i) % MOD;
    }
}

void result() {
    ll cnt;
    cin>>cnt;
    preCompute();
    while (cnt--) {
        ll n, k;
        cin>>n>>k;
        cout << ncr(n, k) << "\n";
    }
}

int main() {
    fastIO();
    result();
    return 0;
}