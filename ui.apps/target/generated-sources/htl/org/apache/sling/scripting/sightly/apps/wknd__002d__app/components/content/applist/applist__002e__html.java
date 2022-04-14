/*******************************************************************************
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 ******************************************************************************/
package org.apache.sling.scripting.sightly.apps.wknd__002d__app.components.content.applist;

import java.io.PrintWriter;
import java.util.Collection;
import javax.script.Bindings;

import org.apache.sling.scripting.sightly.render.RenderUnit;
import org.apache.sling.scripting.sightly.render.RenderContext;

public final class applist__002e__html extends RenderUnit {

    @Override
    protected final void render(PrintWriter out,
                                Bindings bindings,
                                Bindings arguments,
                                RenderContext renderContext) {
// Main Template Body -----------------------------------------------------------------------------

Object _global_clientlib = null;
Object _global_thisnode = null;
Object _dynamic_properties = bindings.get("properties");
out.write("<script src=\"https://code.jquery.com/jquery-3.6.0.min.js\" integrity=\"sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=\" crossorigin=\"anonymous\"></script>\r\n");
_global_clientlib = renderContext.call("use", "/libs/granite/sightly/templates/clientlib.html", obj());
{
    Object var_templatevar0 = renderContext.getObjectModel().resolveProperty(_global_clientlib, "all");
    {
        String var_templateoptions1_field$_categories = "applist";
        {
            java.util.Map var_templateoptions1 = obj().with("categories", var_templateoptions1_field$_categories);
            callUnit(out, renderContext, var_templatevar0, var_templateoptions1);
        }
    }
}
out.write("\r\n");
_global_thisnode = renderContext.call("use", com.adobe.aem.guides.wkndapp.core.models.NodeNameExporter.class.getName(), obj());
out.write("<div>\r\n    <div");
{
    Object var_attrvalue2 = renderContext.getObjectModel().resolveProperty(_global_thisnode, "nodeName");
    {
        Object var_attrcontent3 = renderContext.call("xss", var_attrvalue2, "attribute");
        {
            boolean var_shoulddisplayattr5 = (((null != var_attrcontent3) && (!"".equals(var_attrcontent3))) && ((!"".equals(var_attrvalue2)) && (!((Object)false).equals(var_attrvalue2))));
            if (var_shoulddisplayattr5) {
                out.write(" id");
                {
                    boolean var_istrueattr4 = (var_attrvalue2.equals(true));
                    if (!var_istrueattr4) {
                        out.write("=\"");
                        out.write(renderContext.getObjectModel().toString(var_attrcontent3));
                        out.write("\"");
                    }
                }
            }
        }
    }
}
out.write(">\r\n        <ul class=\"categories\"></ul>\r\n        <ul class=\"applistContainer\"></ul>\r\n        <ul class=\"pager\"></ul>\r\n    </div>\r\n</div>\r\n\r\n");
{
    boolean var_testvariable6 = (!renderContext.getObjectModel().toBoolean(renderContext.getObjectModel().resolveProperty(_dynamic_properties, "disclaimer")));
    if (var_testvariable6) {
        out.write("<div>\r\n    <p>this is default message.</p>\r\n</div>");
    }
}
out.write("\r\n");
{
    Object var_testvariable7 = renderContext.getObjectModel().resolveProperty(_dynamic_properties, "disclaimer");
    if (renderContext.getObjectModel().toBoolean(var_testvariable7)) {
        out.write("<div>\r\n    <p");
        {
            String var_attrcontent8 = (("color:" + renderContext.getObjectModel().toString(renderContext.call("xss", renderContext.getObjectModel().resolveProperty(_dynamic_properties, "backgroundcolor"), "styleToken"))) + "; float:left");
            out.write(" style=\"");
            out.write(renderContext.getObjectModel().toString(var_attrcontent8));
            out.write("\"");
        }
        out.write(">");
        {
            Object var_9 = renderContext.call("xss", renderContext.getObjectModel().resolveProperty(_dynamic_properties, "disclaimer"), "text");
            out.write(renderContext.getObjectModel().toString(var_9));
        }
        out.write("</p>\r\n</div>");
    }
}


// End Of Main Template Body ----------------------------------------------------------------------
    }



    {
//Sub-Templates Initialization --------------------------------------------------------------------



//End of Sub-Templates Initialization -------------------------------------------------------------
    }

}

