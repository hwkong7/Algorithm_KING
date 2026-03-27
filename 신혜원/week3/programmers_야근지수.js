/*
힙으로 구현
- 최대 힙
 - 작업량이 가장 많은 작업을 줄이는 방식
 => 최대값을 빠르게 찾기 위해 힙 사용
*/
class MaxHeap { // 최대 힙
    constructor() {
        this.heap = []; // 힙을 배열로 표현
    }

    push(value) { // 힙에 값 추가
        this.heap.push(value);  // 배열의 끝에 새 값 추가
        this.bubbleUp(); // 새 값이 힙의 규칙을 만족하도록 위로 이동
    }

    pop() { // 힙에서 최대값 제거 및 반환
        if (this.heap.length === 1) return this.heap.pop(); // 힙에 하나의 요소만 있을 때는 그 요소를 반환

        const top = this.heap[0]; // 최대값 (루트 노드)
        this.heap[0] = this.heap.pop(); // 힙의 마지막 요소를 루트로 이동
        this.bubbleDown(); // 새 루트가 힙의 규칙을 만족하도록 아래로 이동
        return top; // 제거된 최대값 반환
    }

    bubbleUp() { // 새로 추가된 요소가 힙의 규칙을 만족하도록 위로 이동
        let idx = this.heap.length - 1; // 새로 추가된 요소의 인덱스
        const element = this.heap[idx]; // 새로 추가된 요소

        while (idx > 0) { // 루트 노드가 될 때까지 반복
            let parentIdx = Math.floor((idx - 1) / 2); // 부모 노드의 인덱스
            let parent = this.heap[parentIdx]; // 부모 노드의 값

            if (parent >= element) break; // 부모 노드가 새 요소보다 크거나 같으면 힙의 규칙이 만족되므로 종료

            this.heap[idx] = parent; // 부모 노드를 현재 인덱스로 이동
            this.heap[parentIdx] = element; // 새 요소를 부모 인덱스로 이동
            idx = parentIdx; // 인덱스를 부모 인덱스로 업데이트하여 계속 위로 이동
        }
    }

    bubbleDown() { // 루트 노드가 힙의 규칙을 만족하도록 아래로 이동
        let idx = 0; // 루트 노드의 인덱스
        const length = this.heap.length; // 힙의 크기
        const element = this.heap[0]; // 루트 노드의 값

        while (true) { // 자식 노드가 존재하는 동안 반복
            let leftIdx = idx * 2 + 1; // 왼쪽 자식 노드의 인덱스
            let rightIdx = idx * 2 + 2; // 오른쪽 자식 노드의 인덱스
            let swap = null; // 교환할 자식 노드의 인덱스

            if (leftIdx < length) { // 왼쪽 자식 노드가 존재하면
                if (this.heap[leftIdx] > element) { // 왼쪽 자식 노드가 루트 노드보다 크면
                    swap = leftIdx; // 왼쪽 자식 노드를 교환 대상으로 설정
                }
            }

            if (rightIdx < length) { // 오른쪽 자식 노드가 존재하면
                if (
                    (swap === null && this.heap[rightIdx] > element) || // 오른쪽 자식 노드가 루트 노드보다 크거나
                    (swap !== null && this.heap[rightIdx] > this.heap[leftIdx]) // 오른쪽 자식 노드가 왼쪽 자식 노드보다 크면
                ) {
                    swap = rightIdx; // 오른쪽 자식 노드를 교환 대상으로 설정
                }
            }

            if (swap === null) break; // 교환할 자식 노드가 없으면 힙의 규칙이 만족되므로 종료

            this.heap[idx] = this.heap[swap]; // 교환할 자식 노드를 현재 인덱스로 이동
            this.heap[swap] = element; // 루트 노드를 교환할 자식 인덱스로 이동
            idx = swap; // 인덱스를 교환할 자식 인덱스로 업데이트하여 계속 아래로 이동
        }
    }
}

function solution(n, works) { 
    let total = works.reduce((a, b) => a + b, 0); //total 작업량 계산
    if (total <= n) return 0; // 남은 작업량이 없으면 0 반환

    const heap = new MaxHeap(); // 최대 힙 생성

    for (let work of works) { // 작업량을 힙에 추가
        heap.push(work); // 힙에 작업량 추가
    }

    for (let i = 0; i < n; i++) { // n번 동안 작업량을 줄이는 작업 반복
        let max = heap.pop(); // 힙에서 최대값 제거 및 반환
        if (max === 0) break; // 최대값이 0이면 더 이상 줄일 작업이 없으므로 종료
        heap.push(max - 1); // 최대값에서 1을 줄인 값을 힙에 다시 추가하여 힙의 규칙을 유지
    }

    return heap.heap.reduce((sum, work) => sum + work * work, 0); // 남은 작업량의 제곱의 합 계산하여 반환
}