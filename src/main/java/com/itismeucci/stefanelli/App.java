package com.itismeucci.stefanelli;

import java.io.IOException;

public class App 
{
    public static void main( String[] args ) throws IOException
    {
        System.out.println( "Hello World!" );
        Server.start(2222);
        Server.accept();
    }
}
