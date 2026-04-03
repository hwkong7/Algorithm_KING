import java.util.*;

class Solution {
    public int[] solution(String[] operations) {
        TreeMap<Integer, Integer> map = new TreeMap<>();

        for (String op : operations) {
            String[] parts = op.split(" ");
            String command = parts[0];
            int num = Integer.parseInt(parts[1]);

            // 삽입
            if (command.equals("I")) {
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
            // 삭제
            else {
                if (map.isEmpty()) continue;

                // 최댓값 삭제
                if (num == 1) {
                    int maxKey = map.lastKey();
                    if (map.get(maxKey) == 1) {
                        map.remove(maxKey);
                    } else {
                        map.put(maxKey, map.get(maxKey) - 1);
                    }
                }
                // 최솟값 삭제
                else if (num == -1) {
                    int minKey = map.firstKey();
                    if (map.get(minKey) == 1) {
                        map.remove(minKey);
                    } else {
                        map.put(minKey, map.get(minKey) - 1);
                    }
                }
            }
        }

        if (map.isEmpty()) {
            return new int[]{0, 0};
        }

        return new int[]{map.lastKey(), map.firstKey()};
    }
}