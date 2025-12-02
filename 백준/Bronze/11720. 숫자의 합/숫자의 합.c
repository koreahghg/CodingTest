#include <stdio.h>

int main() {
    int N;
    char s[100];
    scanf("%d", &N);
    scanf("%s", s);
    int sum = 0;
    for (int i = 0; i < N; i++) {
        sum += s[i] - '0';
    }
    printf("%d\n", sum);
    return 0;
}