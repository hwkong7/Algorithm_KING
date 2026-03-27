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

bool isPassed(int mid, ll target, const vector<ll> & data) {
    return target > data[mid - 1];
}

int binarySearch(ll high, ll target, const vector<ll>& data) {
    ll low = 1;
    ll mid;
    while (low <= high) {
        mid = (low + high) / 2;
        if (isPassed(mid, target, data)) {
            low = mid + 1;
        }
        else { high = mid - 1; }
    }
    return target == data[low-1] ? low-1 : -1;
}

void fastIO() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}
int n;
vector<ll> v;
vector<ll> t;
void solve() {
    cin>>n;
    if (n < 3) {cout << 0; return;}
    v.resize(n);
    for (int i=0; i<n; i++) {
        cin>>v[i];
    }
    sort(v.begin(), v.end());
    ll ret = 0;
    //a = b + c
    for (int i=n-1; i>=0; i--) {
        bool flag = false;
        for (int j=n-1; j>=0; j--) {
            if (i == j) {continue;}
            ll a = v[i], b = v[j];
            ll target = a-b;
            ll bin_ret = binarySearch(v.size(), target, v);

            if (bin_ret != -1) {
                if (target != b && target != a) {
                    flag = true; break;
                }
                else if (target != b) {
                    if (bin_ret < n && v[bin_ret + 1] == a) {
                        flag = true; break;
                    }
                }
                else if (target != a) {
                    if (bin_ret < n && v[bin_ret + 1] == b) {
                        flag = true; break;
                    }
                }
                else if (bin_ret < n && v[bin_ret + 2] == b) {
                    flag = true; break;
                }
            }
        }
        if (flag) {ret++;}
    }

    cout << ret;
}

int main() {
    fastIO();
    solve();
    return 0;
}