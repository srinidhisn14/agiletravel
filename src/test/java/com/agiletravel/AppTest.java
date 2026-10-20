package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AppTest {
    @Test
    public void testPalindrome() {
        assertTrue(new App().isPalindrome(121));
    }

    @Test
    public void testNotPalindrome() {
        assertTrue(new App().isPalindrome(123));
    }
}

