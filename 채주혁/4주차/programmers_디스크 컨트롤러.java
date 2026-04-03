4
import java.util.*;

class Solution {
    public int solution(int[][] jobs) {
        int n = jobs.length;

        // [작업번호, 요청시각, 소요시간] 형태로 변환
        int[][] arr = new int[n][3];
        for (int i = 0; i < n; i++) {
            arr[i][0] = i;          // 작업 번호
            arr[i][1] = jobs[i][0]; // 요청 시각
            arr[i][2] = jobs[i][1]; // 소요 시간
        }

        // 요청 시각 순, 같으면 작업 번호 순
        Arrays.sort(arr, (a, b) -> {
            if (a[1] == b[1]) return a[0] - b[0];
            return a[1] - b[1];
        });


        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            if (a[2] == b[2]) {
                if (a[1] == b[1]) return a[0] - b[0];
                return a[1] - b[1];
            }
            return a[2] - b[2];
        });

        int time = 0;
        int idx = 0;
        int count = 0;
        int total = 0;

        while (count < n) {
            while (idx < n && arr[idx][1] <= time) {
                pq.offer(arr[idx]);
                idx++;
            }

            if (!pq.isEmpty()) {
                int[] cur = pq.poll();
                int request = cur[1];
                int duration = cur[2];

                time += duration;
                total += (time - request);
                count++;
            } else {
                time = arr[idx][1];
            }
        }

        return total / n;
    }
}