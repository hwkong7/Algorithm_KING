import java.util.*;

class Solution {
    static int[][] map = new int[102][102];
    static boolean[][] visited = new boolean[102][102];
    static int[] dx = {1, -1, 0, 0};
    static int[] dy = {0, 0, 1, -1};

    static class Node {
        int x, y, dist;

        Node(int x, int y, int dist) {
            this.x = x;
            this.y = y;
            this.dist = dist;
        }
    }

    public int solution(int[][] rectangle, int characterX, int characterY, int itemX, int itemY) {

        for (int[] rect : rectangle) {
            int x1 = rect[0] * 2;
            int y1 = rect[1] * 2;
            int x2 = rect[2] * 2;
            int y2 = rect[3] * 2;

            for (int x = x1; x <= x2; x++) {
                for (int y = y1; y <= y2; y++) {
                    map[x][y] = 1;
                }
            }
        }

        for (int[] rect : rectangle) {
            int x1 = rect[0] * 2;
            int y1 = rect[1] * 2;
            int x2 = rect[2] * 2;
            int y2 = rect[3] * 2;

            for (int x = x1 + 1; x < x2; x++) {
                for (int y = y1 + 1; y < y2; y++) {
                    map[x][y] = 0;
                }
            }
        }

        return bfs(characterX * 2, characterY * 2, itemX * 2, itemY * 2);
    }

    static int bfs(int startX, int startY, int itemX, int itemY) {
        Queue<Node> queue = new LinkedList<>();
        queue.offer(new Node(startX, startY, 0));
        visited[startX][startY] = true;

        while (!queue.isEmpty()) {
            Node now = queue.poll();

            if (now.x == itemX && now.y == itemY) {
                return now.dist / 2;
            }

            for (int d = 0; d < 4; d++) {
                int nx = now.x + dx[d];
                int ny = now.y + dy[d];

                if (nx < 0 || ny < 0 || nx >= 102 || ny >= 102) continue;
                if (visited[nx][ny]) continue;
                if (map[nx][ny] != 1) continue;

                visited[nx][ny] = true;
                queue.offer(new Node(nx, ny, now.dist + 1));
            }
        }

        return 0;
    }
}