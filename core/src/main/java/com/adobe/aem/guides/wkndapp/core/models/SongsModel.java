package com.adobe.aem.guides.wkndapp.core.models;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import javax.annotation.PostConstruct;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import com.google.gson.Gson;

import java.util.Objects;

@Model(adaptables = SlingHttpServletRequest.class)
public class SongsModel {

    Gson gson = new Gson();

    protected Map result;

    protected String storedURL;

    @SlingObject
    SlingHttpServletRequest request;

    @PostConstruct
    protected void init() {

        // 현재 노드를 할당합니다.
        Node currentNode = request.getResource().adaptTo(Node.class);

        // 현재 세션을 할당합니다.
        Session session = request.getResourceResolver().adaptTo(Session.class);

        try {
            if (currentNode != null && currentNode.hasProperty("url")) {
                storedURL = Objects.requireNonNull(currentNode).getProperty("url").getString();
                String json = readUrl(storedURL);
                result = gson.fromJson(json, HashMap.class);
            }
        } catch (Exception e) {
            // TODO: handle exception
        }

    }

    public Map getResult() {
        return result;
    }

    private static String readUrl(String urlString) throws Exception {

        BufferedReader reader = null;

        try {

            URL url = new URL(urlString);
            reader = new BufferedReader(new InputStreamReader(url.openStream()));
            StringBuffer buffer = new StringBuffer();
            int read = -1;
            char[] chars = new char[1024];
            while ((read = reader.read(chars)) != -1) {

                buffer.append(chars, 0, read);

            }
            return buffer.toString();
        } finally {

            if (reader != null) {
                reader.close();
            }

        }

    }

}
