package com.itismeucci.stefanelli;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;
import java.nio.file.Files;

public class ClientHandler extends Thread {
 
    public Socket socket;
    public BufferedReader input;
    public DataOutputStream output;

    public ClientHandler(Socket socket) throws IOException {

        this.socket = socket;
        input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        output = new DataOutputStream(socket.getOutputStream());
    }

    // GET / HTTP/1.1
    // Host: localhost:2222
    // Connection: keep-alive
    // sec-ch-ua: "Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"
    // sec-ch-ua-mobile: ?0
    // sec-ch-ua-platform: "Linux"
    // Upgrade-Insecure-Requests: 1
    // User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
    // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    // Sec-Fetch-Site: none
    // Sec-Fetch-Mode: navigate
    // Sec-Fetch-User: ?1
    // Sec-Fetch-Dest: document
    // Accept-Encoding: gzip, deflate, br
    // Accept-Language: en-US,en;q=0.9

    @Override
    public void run() {

        while (true) {

            try {

                String request = input.readLine();
                String pageRequested = request.split(" ")[1];
                //System.out.println(pageRequested);

                String reply = "";

                switch (pageRequested) {

                    case "/": 
                        reply = Files.readString(new File("index.html").toPath());
                        break;

                    case "uccello":
                        break;

                    case "pipistrello":
                        break;

                    case "nootnoot":
                        break;

                    default:
                        reply = "";
                        break;
                }

                output.writeBytes("HTTP/1.1 200 OK\r\n");
                output.writeBytes("Content-type: text/html\r\n\r\n");

                output.writeBytes(reply);


            } catch (Exception e) {

                System.out.println("gogo");
                e.printStackTrace();
            }
            break;
        }
    }
}
