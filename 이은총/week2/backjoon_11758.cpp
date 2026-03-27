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

struct Point {
    int x, y;
};

void fastIO() {
    std::ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

int getCCW(Point &p1, Point &p2, Point &p3) {
    return (p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y);
}

void result() {
    Point p1, p2, p3;
    cin>>p1.x>>p1.y>>p2.x>>p2.y>>p3.x>>p3.y;
    int ret = getCCW(p1, p2, p3);
    cout << ((ret == 0) ? 0 : ret / abs(ret));
}

int main() {
    fastIO();
    result();
    return 0;
}