//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:48:53 PM CEST 
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20100901.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-EBIRTH-PLACEvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-EBIRTH-PLACEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="home"/>
 *     &lt;enumeration value="hospital"/>
 *     &lt;enumeration value="other"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-EBIRTH-PLACEvalues")
@XmlEnum
public enum CDEBIRTHPLACEvalues {

    @XmlEnumValue("home")
    HOME("home"),
    @XmlEnumValue("hospital")
    HOSPITAL("hospital"),
    @XmlEnumValue("other")
    OTHER("other");
    private final String value;

    CDEBIRTHPLACEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDEBIRTHPLACEvalues fromValue(String v) {
        for (CDEBIRTHPLACEvalues c: CDEBIRTHPLACEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
