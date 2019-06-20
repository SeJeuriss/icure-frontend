//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:48:52 PM CEST 
//


package org.taktik.icure.be.ehealth.dto.kmehr.v20100901.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-ITEMschemes.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-ITEMschemes">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="CD-ITEM"/>
 *     &lt;enumeration value="CD-ITEM-CARENET"/>
 *     &lt;enumeration value="CD-LAB"/>
 *     &lt;enumeration value="CD-TECHNICAL"/>
 *     &lt;enumeration value="CD-CONTACT-PERSON"/>
 *     &lt;enumeration value="ICD"/>
 *     &lt;enumeration value="ICPC"/>
 *     &lt;enumeration value="LOCAL"/>
 *     &lt;enumeration value="CD-VACCINE"/>
 *     &lt;enumeration value="CD-VACCINEINDICATION"/>
 *     &lt;enumeration value="CD-ECG"/>
 *     &lt;enumeration value="CD-ECARE-CLINICAL"/>
 *     &lt;enumeration value="CD-ECARE-LAB"/>
 *     &lt;enumeration value="CD-ECARE-HAQ"/>
 *     &lt;enumeration value="CD-ITEM-EBIRTH"/>
 *     &lt;enumeration value="CD-PARAMETER"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-ITEMschemes")
@XmlEnum
public enum CDITEMschemes {

    @XmlEnumValue("CD-ITEM")
    CD_ITEM("CD-ITEM", "1.2"),
    @XmlEnumValue("CD-ITEM-CARENET")
    CD_ITEM_CARENET("CD-ITEM-CARENET", "1.0"),
    @XmlEnumValue("CD-LAB")
    CD_LAB("CD-LAB", "1.1"),
    @XmlEnumValue("CD-TECHNICAL")
    CD_TECHNICAL("CD-TECHNICAL", "1.0"),
    @XmlEnumValue("CD-CONTACT-PERSON")
    CD_CONTACT_PERSON("CD-CONTACT-PERSON", "1.1"),
    ICD("ICD", "1.0"),
    ICPC("ICPC", "1.0"),
    LOCAL("LOCAL", "1.0"),
    @XmlEnumValue("CD-VACCINE")
    CD_VACCINE("CD-VACCINE", "2.0"),
    @XmlEnumValue("CD-VACCINEINDICATION")
    CD_VACCINEINDICATION("CD-VACCINEINDICATION", "1.0"),
    @XmlEnumValue("CD-ECG")
    CD_ECG("CD-ECG", "1.0"),
    @XmlEnumValue("CD-ECARE-CLINICAL")
    CD_ECARE_CLINICAL("CD-ECARE-CLINICAL", "1.0"),
    @XmlEnumValue("CD-ECARE-LAB")
    CD_ECARE_LAB("CD-ECARE-LAB", "1.0"),
    @XmlEnumValue("CD-ECARE-HAQ")
    CD_ECARE_HAQ("CD-ECARE-HAQ", "1.0"),
    @XmlEnumValue("CD-ITEM-EBIRTH")
    CD_ITEM_EBIRTH("CD-ITEM-EBIRTH", "1.0"),
    @XmlEnumValue("CD-PARAMETER")
    CD_PARAMETER("CD-PARAMETER", "1.0");
    private final String value; //
    private final String version;
    CDITEMschemes(String v, String vs) {
        value = v;
        version = vs;
    }

    public String value() {
        return value;
    } //

    public String version() {
        return version;
    }

    public static CDITEMschemes fromValue(String v) {
        for (CDITEMschemes c: CDITEMschemes.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
