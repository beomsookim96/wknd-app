package com.adobe.aem.guides.wkndapp.core.models;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.SearchResult;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.annotation.PostConstruct;
import javax.inject.Named;
import javax.jcr.Session;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;


@Model(
   
        adaptables = { SlingHttpServletRequest.class },
        
        resourceType = "acs-samples/components/content/sling-model",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = "jackson", extensions = "json", options = {

        @ExporterOption(name = "MapperFeature.SORT_PROPERTIES_ALPHABETICALLY", value = "true"),
        @ExporterOption(name = "SerializationFeature.WRITE_DATES_AS_TIMESTAMPS", value="false")
})
/**
 * For Jackson Annotations: https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations
 */
public class NodeNameExporter {

    @Self
    private SlingHttpServletRequest request;

    protected String nodeName;

    @PostConstruct
    // PostConstructs are called after all the injection has occurred, but before the Model object is returned for use.
    private void init() throws RepositoryException {
        Node currentNode = request.getResource().adaptTo(Node.class);
        nodeName = currentNode.getName();
    }

    public String getNodeName(){
        return this.nodeName;
    }

    // @JsonProperty is a Jackson Annotation specific to this field defines the JSON Property name to expose this method as.
    // For a list of Jackson Annotations see https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations
    @JsonProperty(value = "thisNodeName")
    public String goodbyeWorld() {
        return this.nodeName;
    }
}
