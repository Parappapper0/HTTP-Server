package com.itismeucci.stefanelli;

import java.io.IOException;
import java.net.ServerSocket;

public class Server {
    
    public static ServerSocket server;

    public static void start(int port) throws IOException {

        server = new ServerSocket(port);
    }

    public static void accept() throws IOException {

        ClientHandler c = new ClientHandler(server.accept());
        c.start();
    }
}
