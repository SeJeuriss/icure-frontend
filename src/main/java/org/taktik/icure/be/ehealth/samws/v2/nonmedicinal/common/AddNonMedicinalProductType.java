//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a>
// Any modifications to this file will be lost upon recompilation of the source schema.
// Generated on: 2019.05.22 at 08:11:32 PM CEST
//


package org.taktik.icure.be.ehealth.samws.v2.nonmedicinal.common;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import org.taktik.icure.be.ehealth.samws.v2.core.AddActionType;
import org.taktik.icure.be.ehealth.samws.v2.core.TextType;


/**
 * <p>Java class for AddNonMedicinalProductType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="AddNonMedicinalProductType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:nonmedicinal:common}NonMedicinalProductKeyType">
 *       &lt;sequence>
 *         &lt;group ref="{urn:be:fgov:ehealth:samws:v2:nonmedicinal:common}NonMedicinalProductFields"/>
 *       &lt;/sequence>
 *       &lt;attribute name="action" use="required" type="{urn:be:fgov:ehealth:samws:v2:core}addActionType" />
 *       &lt;attribute name="from" use="required" type="{urn:be:fgov:ehealth:samws:v2:core}validityDateType" />
 *       &lt;attribute name="to" type="{urn:be:fgov:ehealth:samws:v2:core}validityDateType" />
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AddNonMedicinalProductType", propOrder = {
    "name",
    "category",
    "commercialStatus",
    "producer",
    "distributor"
})
public class AddNonMedicinalProductType
    extends NonMedicinalProductKeyType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "Name", required = true)
    protected TextType name;
    @XmlElement(name = "Category", required = true)
    protected String category;
    @XmlElement(name = "CommercialStatus", required = true)
    protected String commercialStatus;
    @XmlElement(name = "Producer", required = true)
    protected TextType producer;
    @XmlElement(name = "Distributor")
    protected TextType distributor;
    @XmlAttribute(name = "action", required = true)
    protected AddActionType action;
    @XmlAttribute(name = "from", required = true)
    protected XMLGregorianCalendar from;
    @XmlAttribute(name = "to")
    protected XMLGregorianCalendar to;

    /**
     * Gets the value of the name property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setName(TextType value) {
        this.name = value;
    }

    /**
     * Gets the value of the category property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getCategory() {
        return category;
    }

    /**
     * Sets the value of the category property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setCategory(String value) {
        this.category = value;
    }

    /**
     * Gets the value of the commercialStatus property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getCommercialStatus() {
        return commercialStatus;
    }

    /**
     * Sets the value of the commercialStatus property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setCommercialStatus(String value) {
        this.commercialStatus = value;
    }

    /**
     * Gets the value of the producer property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getProducer() {
        return producer;
    }

    /**
     * Sets the value of the producer property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setProducer(TextType value) {
        this.producer = value;
    }

    /**
     * Gets the value of the distributor property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getDistributor() {
        return distributor;
    }

    /**
     * Sets the value of the distributor property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setDistributor(TextType value) {
        this.distributor = value;
    }

    /**
     * Gets the value of the action property.
     *
     * @return
     *     possible object is
     *     {@link AddActionType }
     *
     */
    public AddActionType getAction() {
        return action;
    }

    /**
     * Sets the value of the action property.
     *
     * @param value
     *     allowed object is
     *     {@link AddActionType }
     *
     */
    public void setAction(AddActionType value) {
        this.action = value;
    }

    /**
     * Gets the value of the from property.
     *
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public XMLGregorianCalendar getFrom() {
        return from;
    }

    /**
     * Sets the value of the from property.
     *
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public void setFrom(XMLGregorianCalendar value) {
        this.from = value;
    }

    /**
     * Gets the value of the to property.
     *
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public XMLGregorianCalendar getTo() {
        return to;
    }

    /**
     * Sets the value of the to property.
     *
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public void setTo(XMLGregorianCalendar value) {
        this.to = value;
    }

}
