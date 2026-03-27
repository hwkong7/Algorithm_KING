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
    vector<int> v;
    int n, k;
    cin>>n>>k;
    v.resize(n);
    for (int i=0; i<n; i++) {
        cin>>v[i];
    }

    sort(v.begin(), v.end());
    cout << v[k-1];
}

int main() {
    fastIO();
    result();
    return 0;
}