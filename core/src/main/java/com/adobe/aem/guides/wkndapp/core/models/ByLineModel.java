package com.adobe.aem.guides.wkndapp.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import javax.annotation.PostConstruct;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.util.Objects;

@Model(adaptables = {SlingHttpServletRequest.class},
       defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class ByLineModel {

    
    
    protected String quote;
    
    protected String author;

    protected String storedAuthor;
    
    @SlingObject
    SlingHttpServletRequest request;
    
    @PostConstruct
    public void init(){

            // 현재 노드를 할당합니다.
            Node currentNode = request.getResource().adaptTo(Node.class);
            
            // 현재 세션을 할당합니다.
            Session session = request.getResourceResolver().adaptTo(Session.class); 
            
            try {
                // 현재 노드가 Null이 아니고 author Property가 존재한다면 "--"를 붙입니다.
                if (currentNode != null && !currentNode.hasProperty("author")) {
                    currentNode.setProperty("author","-author-") ;
                }else{
                    
                    storedAuthor = Objects.requireNonNull(currentNode).getProperty("author").getString();
                
                    currentNode.setProperty("author", "-"+storedAuthor.replace("-", "")+"-");
                }
                // Saving the session
                Objects.requireNonNull(session).save();
            } catch (RepositoryException e) {
            }
    }

    public String getQuote(){
        return quote;
    }

    public String getAuthor(){
        return author;
    }
    
}
