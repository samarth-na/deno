#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
	printf("Hello World");
	struct ListNode {
		int val;
		ListNode *next;
		ListNode() : val(0), next(nullptr) {}
		ListNode(int x) : val(x), next(nullptr) {}
		ListNode(int x, ListNode *next) : val(x), next(next) {}
	};
}
