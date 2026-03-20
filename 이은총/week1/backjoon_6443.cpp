#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
#include <cstring>
#define ll long long
#define INF 987654321987654321LL
#define MOD 1000000007
#define MAX 101

using namespace std;

void fastIO() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}
int n;
void solve() {
    cin>>n;
    while(n--){
        string inp; cin>>inp;

        sort(inp.begin(), inp.end());
        do{
            cout<<inp<<'\n';
        }while(next_permutation(inp.begin(), inp.end()));
    }
}

int main() {
    fastIO();
    solve();
    return 0;
}