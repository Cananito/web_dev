int r_sum(int a, int b) {
  return a + b;
}

extern void print(char* message, int message_length);

static int r_strlen(char* str) {
  int len = 0;
  int i = 0;
  while (str[i] != '\0') {
    len++;
    i++;
  }
  return len;
}

void r_call_me_back(void) {
  char* message = "Hello from C!";
  int message_length = r_strlen(message);
  print(message, message_length);
}
