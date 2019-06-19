//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:49:50 PM CEST 
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20100601.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-VACCINEvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-VACCINEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="polio"/>
 *     &lt;enumeration value="diteper"/>
 *     &lt;enumeration value="haemo"/>
 *     &lt;enumeration value="mmr"/>
 *     &lt;enumeration value="hepatitiesb"/>
 *     &lt;enumeration value="mmr12"/>
 *     &lt;enumeration value="dite12"/>
 *     &lt;enumeration value="meningitisc"/>
 *     &lt;enumeration value="influenza"/>
 *     &lt;enumeration value="pneumonia"/>
 *     &lt;enumeration value="ditepro"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-VACCINEvalues")
@XmlEnum
public enum CDVACCINEvalues {

    @XmlEnumValue("polio")
    POLIO("polio"),
    @XmlEnumValue("diteper")
    DITEPER("diteper"),
    @XmlEnumValue("haemo")
    HAEMO("haemo"),
    @XmlEnumValue("mmr")
    MMR("mmr"),
    @XmlEnumValue("hepatitiesb")
    HEPATITIESB("hepatitiesb"),
    @XmlEnumValue("mmr12")
    MMR_12("mmr12"),
    @XmlEnumValue("dite12")
    DITE_12("dite12"),
    @XmlEnumValue("meningitisc")
    MENINGITISC("meningitisc"),
    @XmlEnumValue("influenza")
    INFLUENZA("influenza"),
    @XmlEnumValue("pneumonia")
    PNEUMONIA("pneumonia"),
    @XmlEnumValue("ditepro")
    DITEPRO("ditepro");
    private final String value;

    CDVACCINEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDVACCINEvalues fromValue(String v) {
        for (CDVACCINEvalues c: CDVACCINEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
