package com.itismeucci.stefanelli;

import com.sun.net.httpserver.*;
import java.io.IOException;
import java.net.InetSocketAddress;

public class App 
{
    public static void main( String[] args ) throws IOException
    {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", new ClientHandler());
        server.start();
    }
}
