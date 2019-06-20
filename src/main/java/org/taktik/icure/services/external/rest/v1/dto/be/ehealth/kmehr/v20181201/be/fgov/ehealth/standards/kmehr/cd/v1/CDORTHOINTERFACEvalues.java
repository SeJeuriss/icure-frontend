//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:49:17 PM CEST 
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20181201.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-ORTHO-INTERFACEvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-ORTHO-INTERFACEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="hacoated"/>
 *     &lt;enumeration value="porous"/>
 *     &lt;enumeration value="smouth"/>
 *     &lt;enumeration value="cementwithab"/>
 *     &lt;enumeration value="cementwithoutab"/>
 *     &lt;enumeration value="allpoly"/>
 *     &lt;enumeration value="none"/>
 *     &lt;enumeration value="other"/>
 *     &lt;enumeration value="metalbacked"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-ORTHO-INTERFACEvalues")
@XmlEnum
public enum CDORTHOINTERFACEvalues {

    @XmlEnumValue("hacoated")
    HACOATED("hacoated"),
    @XmlEnumValue("porous")
    POROUS("porous"),
    @XmlEnumValue("smouth")
    SMOUTH("smouth"),
    @XmlEnumValue("cementwithab")
    CEMENTWITHAB("cementwithab"),
    @XmlEnumValue("cementwithoutab")
    CEMENTWITHOUTAB("cementwithoutab"),
    @XmlEnumValue("allpoly")
    ALLPOLY("allpoly"),
    @XmlEnumValue("none")
    NONE("none"),
    @XmlEnumValue("other")
    OTHER("other"),
    @XmlEnumValue("metalbacked")
    METALBACKED("metalbacked");
    private final String value;

    CDORTHOINTERFACEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDORTHOINTERFACEvalues fromValue(String v) {
        for (CDORTHOINTERFACEvalues c: CDORTHOINTERFACEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
