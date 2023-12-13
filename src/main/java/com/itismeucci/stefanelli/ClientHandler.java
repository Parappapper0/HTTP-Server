package com.itismeucci.stefanelli;

import com.sun.net.httpserver.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ClientHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {

        String requestedPath = exchange.getRequestURI().getPath();
        String fileType = "text/html"; //default

        if (requestedPath.equals("/")) requestedPath = "challenge.html"; //se questo è per forza html quindi non ha senso controllare    
        else if (requestedPath.endsWith(".css")) fileType = "text/css"; //scegli il Content-Type giusto
        else if (requestedPath.endsWith(".js")) fileType = "text/javascript";
        else if (requestedPath.endsWith(".png")) fileType = "image/png";

        System.out.println(Paths.get("src/main/resources/", requestedPath));

        byte[] outputFile;

        if (!new File("src/main/resources/" + requestedPath).isFile()) { //se non esiste la pagina allora manda 404 e la pagina associata

            outputFile = Files.readAllBytes(Paths.get("src/main/resources/Error404.html"));
            exchange.getResponseHeaders().set("Content-Type", "text/html");
            exchange.sendResponseHeaders(404, outputFile.length);
            exchange.getResponseBody().write(outputFile);
            exchange.close();
            return;
        }

        outputFile = Files.readAllBytes(Paths.get("src/main/resources/", requestedPath)); //leggi il file e storalo in outputFile

        System.out.println(" - " + outputFile.length);

        exchange.getResponseHeaders().set("Content-Type", fileType); //setta il Content-Type
        exchange.sendResponseHeaders(200, outputFile.length); //OK + headers + length
        exchange.getResponseBody().write(outputFile);
        exchange.close();
    }    
}
