//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:49:21 PM CEST 
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20150301.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-DISCHARGETYPEvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-DISCHARGETYPEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="alive"/>
 *     &lt;enumeration value="dead"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-DISCHARGETYPEvalues")
@XmlEnum
public enum CDDISCHARGETYPEvalues {

    @XmlEnumValue("alive")
    ALIVE("alive"),
    @XmlEnumValue("dead")
    DEAD("dead");
    private final String value;

    CDDISCHARGETYPEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDDISCHARGETYPEvalues fromValue(String v) {
        for (CDDISCHARGETYPEvalues c: CDDISCHARGETYPEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
