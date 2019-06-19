//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:49:15 PM CEST 
//


package org.taktik.icure.be.ehealth.dto.kmehr.v20181201.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-TRANSACTION-MYCARENETvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-TRANSACTION-MYCARENETvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="gmd"/>
 *     &lt;enumeration value="gmdclosure"/>
 *     &lt;enumeration value="gmdextension"/>
 *     &lt;enumeration value="tariff"/>
 *     &lt;enumeration value="tariffmediprima"/>
 *     &lt;enumeration value="cga"/>
 *     &lt;enumeration value="cgd"/>
 *     &lt;enumeration value="mea"/>
 *     &lt;enumeration value="cgacancellation"/>
 *     &lt;enumeration value="maa"/>
 *     &lt;enumeration value="maaextension"/>
 *     &lt;enumeration value="maaappendix"/>
 *     &lt;enumeration value="maacancellation"/>
 *     &lt;enumeration value="maaclosure"/>
 *     &lt;enumeration value="maaagreement"/>
 *     &lt;enumeration value="maarefusal"/>
 *     &lt;enumeration value="maaintreatment"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-TRANSACTION-MYCARENETvalues")
@XmlEnum
public enum CDTRANSACTIONMYCARENETvalues {

    @XmlEnumValue("gmd")
    GMD("gmd"),
    @XmlEnumValue("gmdclosure")
    GMDCLOSURE("gmdclosure"),
    @XmlEnumValue("gmdextension")
    GMDEXTENSION("gmdextension"),
    @XmlEnumValue("tariff")
    TARIFF("tariff"),
    @XmlEnumValue("tariffmediprima")
    TARIFFMEDIPRIMA("tariffmediprima"),
    @XmlEnumValue("cga")
    CGA("cga"),
    @XmlEnumValue("cgd")
    CGD("cgd"),
    @XmlEnumValue("mea")
    MEA("mea"),
    @XmlEnumValue("cgacancellation")
    CGACANCELLATION("cgacancellation"),
    @XmlEnumValue("maa")
    MAA("maa"),
    @XmlEnumValue("maaextension")
    MAAEXTENSION("maaextension"),
    @XmlEnumValue("maaappendix")
    MAAAPPENDIX("maaappendix"),
    @XmlEnumValue("maacancellation")
    MAACANCELLATION("maacancellation"),
    @XmlEnumValue("maaclosure")
    MAACLOSURE("maaclosure"),
    @XmlEnumValue("maaagreement")
    MAAAGREEMENT("maaagreement"),
    @XmlEnumValue("maarefusal")
    MAAREFUSAL("maarefusal"),
    @XmlEnumValue("maaintreatment")
    MAAINTREATMENT("maaintreatment");
    private final String value;

    CDTRANSACTIONMYCARENETvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDTRANSACTIONMYCARENETvalues fromValue(String v) {
        for (CDTRANSACTIONMYCARENETvalues c: CDTRANSACTIONMYCARENETvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
