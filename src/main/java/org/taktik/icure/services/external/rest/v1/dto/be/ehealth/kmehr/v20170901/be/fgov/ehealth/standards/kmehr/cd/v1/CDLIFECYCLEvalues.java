//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:49:04 PM CEST 
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20170901.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-LIFECYCLEvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-LIFECYCLEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="aborted"/>
 *     &lt;enumeration value="active"/>
 *     &lt;enumeration value="added"/>
 *     &lt;enumeration value="administrated"/>
 *     &lt;enumeration value="cancelled"/>
 *     &lt;enumeration value="completed"/>
 *     &lt;enumeration value="corrected"/>
 *     &lt;enumeration value="delivered"/>
 *     &lt;enumeration value="substituted"/>
 *     &lt;enumeration value="inactive"/>
 *     &lt;enumeration value="planned"/>
 *     &lt;enumeration value="prescribed"/>
 *     &lt;enumeration value="reported"/>
 *     &lt;enumeration value="refused"/>
 *     &lt;enumeration value="switched"/>
 *     &lt;enumeration value="suspended"/>
 *     &lt;enumeration value="stopped"/>
 *     &lt;enumeration value="excluded"/>
 *     &lt;enumeration value="notpresent"/>
 *     &lt;enumeration value="ordered"/>
 *     &lt;enumeration value="scheduled"/>
 *     &lt;enumeration value="todo"/>
 *     &lt;enumeration value="postponed"/>
 *     &lt;enumeration value="pending"/>
 *     &lt;enumeration value="expected"/>
 *     &lt;enumeration value="obtained"/>
 *     &lt;enumeration value="proposed"/>
 *     &lt;enumeration value="retracted"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-LIFECYCLEvalues")
@XmlEnum
public enum CDLIFECYCLEvalues {

    @XmlEnumValue("aborted")
    ABORTED("aborted"),
    @XmlEnumValue("active")
    ACTIVE("active"),
    @XmlEnumValue("added")
    ADDED("added"),
    @XmlEnumValue("administrated")
    ADMINISTRATED("administrated"),
    @XmlEnumValue("cancelled")
    CANCELLED("cancelled"),
    @XmlEnumValue("completed")
    COMPLETED("completed"),
    @XmlEnumValue("corrected")
    CORRECTED("corrected"),
    @XmlEnumValue("delivered")
    DELIVERED("delivered"),
    @XmlEnumValue("substituted")
    SUBSTITUTED("substituted"),
    @XmlEnumValue("inactive")
    INACTIVE("inactive"),
    @XmlEnumValue("planned")
    PLANNED("planned"),
    @XmlEnumValue("prescribed")
    PRESCRIBED("prescribed"),
    @XmlEnumValue("reported")
    REPORTED("reported"),
    @XmlEnumValue("refused")
    REFUSED("refused"),
    @XmlEnumValue("switched")
    SWITCHED("switched"),
    @XmlEnumValue("suspended")
    SUSPENDED("suspended"),
    @XmlEnumValue("stopped")
    STOPPED("stopped"),
    @XmlEnumValue("excluded")
    EXCLUDED("excluded"),
    @XmlEnumValue("notpresent")
    NOTPRESENT("notpresent"),
    @XmlEnumValue("ordered")
    ORDERED("ordered"),
    @XmlEnumValue("scheduled")
    SCHEDULED("scheduled"),
    @XmlEnumValue("todo")
    TODO("todo"),
    @XmlEnumValue("postponed")
    POSTPONED("postponed"),
    @XmlEnumValue("pending")
    PENDING("pending"),
    @XmlEnumValue("expected")
    EXPECTED("expected"),
    @XmlEnumValue("obtained")
    OBTAINED("obtained"),
    @XmlEnumValue("proposed")
    PROPOSED("proposed"),
    @XmlEnumValue("retracted")
    RETRACTED("retracted");
    private final String value;

    CDLIFECYCLEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDLIFECYCLEvalues fromValue(String v) {
        for (CDLIFECYCLEvalues c: CDLIFECYCLEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
