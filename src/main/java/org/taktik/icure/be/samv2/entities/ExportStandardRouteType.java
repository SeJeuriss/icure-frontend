//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a>
// Any modifications to this file will be lost upon recompilation of the source schema.
// Generated on: 2019.05.22 at 08:11:32 PM CEST
//


package org.taktik.icure.be.samv2.entities;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.taktik.icure.be.ehealth.samws.v2.core.Text255Type;
import org.taktik.icure.be.ehealth.samws.v2.core.TextType;


/**
 * <p>Java class for ExportStandardRouteType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="ExportStandardRouteType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:export}StandardRouteKeyType">
 *       &lt;sequence>
 *         &lt;group ref="{urn:be:fgov:ehealth:samws:v2:refdata}StandardRouteFields"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ExportStandardRouteType", propOrder = {
    "name",
    "definition",
    "url"
})
@XmlSeeAlso({
    ExportStandardRouteAndRouteOfAdministrationType.class
})
public class ExportStandardRouteType
    extends StandardRouteKeyType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "Name", namespace = "urn:be:fgov:ehealth:samws:v2:refdata")
    protected Text255Type name;
    @XmlElement(name = "Definition", namespace = "urn:be:fgov:ehealth:samws:v2:refdata")
    protected TextType definition;
    @XmlElement(name = "URL", namespace = "urn:be:fgov:ehealth:samws:v2:refdata")
    protected String url;

    /**
     * Gets the value of the name property.
     *
     * @return
     *     possible object is
     *     {@link Text255Type }
     *
     */
    public Text255Type getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     *
     * @param value
     *     allowed object is
     *     {@link Text255Type }
     *
     */
    public void setName(Text255Type value) {
        this.name = value;
    }

    /**
     * Gets the value of the definition property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getDefinition() {
        return definition;
    }

    /**
     * Sets the value of the definition property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setDefinition(TextType value) {
        this.definition = value;
    }

    /**
     * Gets the value of the url property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getURL() {
        return url;
    }

    /**
     * Sets the value of the url property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setURL(String value) {
        this.url = value;
    }

}
