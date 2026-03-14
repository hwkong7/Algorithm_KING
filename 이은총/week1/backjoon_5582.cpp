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
#define MOD 10
#define MAX 101
//this is not for development, but for PS.
//this line is super critical for development.

using namespace std;

void fastIO() {
    std::ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

ll result() {
    string a, b;
    cin>>a>>b;
    ll sz_a = a.size();
    ll sz_b = b.size();
    ll dp[sz_a+1][sz_b+1];
    ll ret = 0;
    for (int i=0; i<=sz_a; i++) {
        for (int j=0; j<=sz_b; j++) {
            dp[i][j] = 0;
        }
    }

    for (int i=1; i<=sz_a; i++) {
        for (int j=1; j<=sz_b; j++) {
            if (a[i-1] == b[j-1]) {
                if (i == 0 || j == 0)
                    dp[i][j] = 1;
                else
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                ret = max(ret, dp[i][j]);
            }
        }
    }

    return ret;
}


int main(){
    fastIO();
    cout << result();
    return 0;
}

