import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int happyDays = 0;

        // 약속이 있는 경우에만 두 번째 줄을 읽어 기대행복 값을 더합니다.
        if (N > 0) {
            st = new StringTokenizer(br.readLine());
            for (int i = 0; i < N; i++) {
                int h = Integer.parseInt(st.nextToken());
                happyDays += (h + 1); // 기대행복 당일 + 이후 0이 될 때까지의 일수
            }
        }

        // 전체 방학에서 우울하지 않은 날을 빼서 우울한 날을 구합니다.
        int sadDays = M - happyDays;

        // 우울한 날이 없거나 오히려 남는다면 0 출력 후 종료
        if (sadDays <= 0) {
            System.out.println(0);
            return;
        }

        // 우울한 날을 분배할 구간의 개수 (약속 사이사이 + 앞뒤)
        int sections = N + 1;

        // 각 구간에 최소한으로 배정될 우울한 날의 수 (몫)
        int q = sadDays / sections;
        // 하루씩 더 배정해야 하는 구간의 수 (나머지)
        int r = sadDays % sections;

        long totalSadness = 0;

        // 나머지(r)만큼의 구간에는 (q + 1)일치 우울함을 더함
        totalSadness += (long) r * getSadness(q + 1);

        // 남은 구간에는 q일치 우울함을 더함
        totalSadness += (long) (sections - r) * getSadness(q);

        System.out.println(totalSadness);
    }

    // 1부터 c까지의 제곱의 합을 구하는 메서드
    private static long getSadness(long c) {
        return c * (c + 1) * (2 * c + 1) / 6;
    }
}