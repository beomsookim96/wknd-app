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
package org.apache.sling.scripting.sightly.apps.wknd__002d__app.components.content.test1;

import java.io.PrintWriter;
import java.util.Collection;
import javax.script.Bindings;

import org.apache.sling.scripting.sightly.render.RenderUnit;
import org.apache.sling.scripting.sightly.render.RenderContext;

public final class test1__002e__html extends RenderUnit {

    @Override
    protected final void render(PrintWriter out,
                                Bindings bindings,
                                Bindings arguments,
                                RenderContext renderContext) {
// Main Template Body -----------------------------------------------------------------------------

Object _dynamic_properties = bindings.get("properties");
Object _global_model = null;
{
    boolean var_testvariable0 = (!renderContext.getObjectModel().toBoolean(renderContext.getObjectModel().resolveProperty(_dynamic_properties, "url")));
    if (var_testvariable0) {
        out.write("<div>\r\n    <p>test</p>\r\n</div>");
    }
}
out.write("\r\n");
{
    Object var_testvariable1 = renderContext.getObjectModel().resolveProperty(_dynamic_properties, "url");
    if (renderContext.getObjectModel().toBoolean(var_testvariable1)) {
        out.write("<div>\r\n    ");
_global_model = renderContext.call("use", com.adobe.aem.guides.wkndapp.core.models.SongsModel.class.getName(), obj());
        out.write("<div class=\"songContainer\">\r\n        <img class=\"songImage\"");
        {
            Object var_attrvalue2 = renderContext.getObjectModel().resolveProperty(renderContext.getObjectModel().resolveProperty(_global_model, "result"), "image");
            {
                Object var_attrcontent3 = renderContext.call("xss", var_attrvalue2, "uri");
                {
                    boolean var_shoulddisplayattr5 = (((null != var_attrcontent3) && (!"".equals(var_attrcontent3))) && ((!"".equals(var_attrvalue2)) && (!((Object)false).equals(var_attrvalue2))));
                    if (var_shoulddisplayattr5) {
                        out.write(" src");
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
        out.write("/>\r\n        <h1><a class=\"songTitle\"");
        {
            Object var_attrvalue6 = renderContext.getObjectModel().resolveProperty(renderContext.getObjectModel().resolveProperty(_global_model, "result"), "url");
            {
                Object var_attrcontent7 = renderContext.call("xss", var_attrvalue6, "uri");
                {
                    boolean var_shoulddisplayattr9 = (((null != var_attrcontent7) && (!"".equals(var_attrcontent7))) && ((!"".equals(var_attrvalue6)) && (!((Object)false).equals(var_attrvalue6))));
                    if (var_shoulddisplayattr9) {
                        out.write(" href");
                        {
                            boolean var_istrueattr8 = (var_attrvalue6.equals(true));
                            if (!var_istrueattr8) {
                                out.write("=\"");
                                out.write(renderContext.getObjectModel().toString(var_attrcontent7));
                                out.write("\"");
                            }
                        }
                    }
                }
            }
        }
        out.write(">");
        {
            Object var_10 = renderContext.call("xss", renderContext.getObjectModel().resolveProperty(renderContext.getObjectModel().resolveProperty(_global_model, "result"), "title"), "text");
            out.write(renderContext.getObjectModel().toString(var_10));
        }
        out.write("</a></h1>\r\n    </div>\r\n</div>");
    }
}
out.write("\r\n");


// End Of Main Template Body ----------------------------------------------------------------------
    }



    {
//Sub-Templates Initialization --------------------------------------------------------------------



//End of Sub-Templates Initialization -------------------------------------------------------------
    }

}

