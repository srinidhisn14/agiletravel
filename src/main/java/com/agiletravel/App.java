package com.example;

public class App {
    public boolean isPalindrome(int n) {
        if (n < 0) return false;

        int original = n;
        int rev = 0;

        while (n > 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }

        return original == rev;
    }

    public static void main(String[] args) {
        System.out.println("Maximum = " + new App().isPalindrome(121));
    }
}