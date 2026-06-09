import java.util.Scanner;

public class ChatBot {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=================================");
        System.out.println("      CodeAlpha AI ChatBot");
        System.out.println("=================================");
        System.out.println("Type 'bye' to exit the chatbot.");

        while (true) {

            System.out.print("\nYou: ");
            String message = sc.nextLine().toLowerCase();

            if (message.contains("hello") || message.contains("hi")) {
                System.out.println("Bot: Hello! How can I help you?");
            }

            else if (message.contains("how are you")) {
                System.out.println("Bot: I am doing great. Thanks for asking!");
            }

            else if (message.contains("who are you")) {
                System.out.println("Bot: I am a Java-based AI ChatBot created for the CodeAlpha Internship.");
            }

            else if (message.contains("java")) {
                System.out.println("Bot: Java is an object-oriented programming language.");
            }

            else if (message.contains("python")) {
                System.out.println("Bot: Python is widely used for AI, automation, and web development.");
            }

            else if (message.contains("html")) {
                System.out.println("Bot: HTML is used to create the structure of web pages.");
            }

            else if (message.contains("css")) {
                System.out.println("Bot: CSS is used to style web pages.");
            }

            else if (message.contains("javascript")) {
                System.out.println("Bot: JavaScript makes websites interactive.");
            }

            else if (message.contains("ai")) {
                System.out.println("Bot: Artificial Intelligence enables machines to mimic human intelligence.");
            }

            else if (message.contains("oop")) {
                System.out.println("Bot: OOP stands for Object-Oriented Programming.");
            }

            else if (message.contains("database")) {
                System.out.println("Bot: A database stores and manages data efficiently.");
            }

            else if (message.contains("sql")) {
                System.out.println("Bot: SQL is used to communicate with databases.");
            }

            else if (message.contains("github")) {
                System.out.println("Bot: GitHub is a platform for version control and collaboration.");
            }

            else if (message.contains("machine learning")) {
                System.out.println("Bot: Machine Learning is a branch of AI that learns from data.");
            }

            else if (message.contains("thank")) {
                System.out.println("Bot: You're welcome!");
            }

            else if (message.contains("bye")) {
                System.out.println("Bot: Goodbye! Have a nice day!");
                break;
            }

            else {
                System.out.println("Bot: Sorry, I don't understand that.");
            }
        }

        sc.close();
    }
}