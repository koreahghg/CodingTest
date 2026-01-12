#include <stdio.h>

int main() {
    int x;
    int max = -1;
    int a = 0;
    for (int i = 1; i <= 9; i++) {
        if (scanf("%d", &x) != 1) return 0;
        if (x > max) {
            max = x;
            a = i;
        }
    }
    printf("%d\n%d\n", max, a);
}
