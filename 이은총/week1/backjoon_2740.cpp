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
#define MAX 1000000
using namespace std;
using vvll = vector<vector<ll>>;
using pll = pair<ll, ll>;

void getMatMul(vvll &ma, vvll &mb) {
    vvll tmp;
    tmp.resize(ma.size(), vector<ll>(mb[0].size()));
    for(int i = 0; i<ma.size(); i++) {
        for(int j = 0; j<mb[0].size(); j++) {
            for(int k = 0; k<mb.size(); k++) {
                tmp[i][j] += ma[i][k] * mb[k][j];
            }
        }
    }
    ma = tmp;
}


void fastIO() {
    std::ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

void result() {
    ll n, m;
    cin>>n >> m;

    vvll ma, mb;
    ma.resize(n, vector<ll>(m));
    for (int i=0; i<n; i++) {
        for (int j=0; j<m; j++) {
            cin>>ma[i][j];
        }
    }

    ll k;
    cin>>m>>k;
    mb.resize(m, vector<ll>(k));
    for (int i=0; i<m; i++) {
        for (int j=0; j<k; j++) {
            cin>>mb[i][j];
        }
    }

    getMatMul(ma, mb);
    for (int i=0; i<n; i++) {
        for (int j=0; j<k; j++) {
            cout << ma[i][j]<< ' ';
        }
        cout << '\n';
    }
}

int main() {
    fastIO();
    result();
    return 0;
}