//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:49:09 PM CEST 
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20170301.be.fgov.ehealth.standards.kmehr.id.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ID-PROFESSIONschemes.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ID-PROFESSIONschemes">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="ID-MEDEX"/>
 *     &lt;enumeration value="ID-CBE"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ID-PROFESSIONschemes")
@XmlEnum
public enum IDPROFESSIONschemes {

    @XmlEnumValue("ID-MEDEX")
    ID_MEDEX("ID-MEDEX"),
    @XmlEnumValue("ID-CBE")
    ID_CBE("ID-CBE");
    private final String value;

    IDPROFESSIONschemes(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static IDPROFESSIONschemes fromValue(String v) {
        for (IDPROFESSIONschemes c: IDPROFESSIONschemes.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
