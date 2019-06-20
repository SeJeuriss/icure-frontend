//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:50:02 PM CEST 
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20130710.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-MESSAGEvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-MESSAGEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="gpsoftwaremigration"/>
 *     &lt;enumeration value="gppatientmigration"/>
 *     &lt;enumeration value="ptsoftwaremigration"/>
 *     &lt;enumeration value="ptpatientmigration"/>
 *     &lt;enumeration value="nursingsoftwaremigration"/>
 *     &lt;enumeration value="nursingpatientmigration"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-MESSAGEvalues")
@XmlEnum
public enum CDMESSAGEvalues {

    @XmlEnumValue("gpsoftwaremigration")
    GPSOFTWAREMIGRATION("gpsoftwaremigration"),
    @XmlEnumValue("gppatientmigration")
    GPPATIENTMIGRATION("gppatientmigration"),
    @XmlEnumValue("ptsoftwaremigration")
    PTSOFTWAREMIGRATION("ptsoftwaremigration"),
    @XmlEnumValue("ptpatientmigration")
    PTPATIENTMIGRATION("ptpatientmigration"),
    @XmlEnumValue("nursingsoftwaremigration")
    NURSINGSOFTWAREMIGRATION("nursingsoftwaremigration"),
    @XmlEnumValue("nursingpatientmigration")
    NURSINGPATIENTMIGRATION("nursingpatientmigration");
    private final String value;

    CDMESSAGEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDMESSAGEvalues fromValue(String v) {
        for (CDMESSAGEvalues c: CDMESSAGEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
