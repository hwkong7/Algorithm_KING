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

void recur(int n, int barCnt) {
    for (int i=0; i<barCnt; i++) {cout << '_';}
    cout <<"\"재귀함수가 뭔가요?\""<<'\n';
    if (n == 0) {
        for (int i=0; i<barCnt; i++) {cout << '_';}
        cout << "\"재귀함수는 자기 자신을 호출하는 함수라네\"" << '\n';
        for (int i=0; i<barCnt; i++) {cout << '_';}
        cout <<"라고 답변하였지."<<'\n';
        return;
    }
    for (int i=0; i<barCnt; i++) {cout << '_';}
    cout <<"\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어."<<'\n';
    for (int i=0; i<barCnt; i++) {cout << '_';}
    cout <<"마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지."<<'\n';
    for (int i=0; i<barCnt; i++) {cout << '_';}
    cout <<"그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\""<<'\n';
    recur(n-1, barCnt + 4);
    for (int i=0; i<barCnt; i++) {cout << '_';}
    cout <<"라고 답변하였지."<<'\n';
}

void result() {
    int n;
    cin>>n;
    cout << "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다."<<'\n';
    recur(n, 0);
}

int main() {
    fastIO();
    result();
    return 0;
}