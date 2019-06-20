//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:50:09 PM CEST 
//


package org.taktik.icure.be.ehealth.dto.kmehr.v20170601.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-TUCO-STEMITYPEvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-TUCO-STEMITYPEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="stemipci"/>
 *     &lt;enumeration value="stemirescue"/>
 *     &lt;enumeration value="stemilate"/>
 *     &lt;enumeration value="nonstemiurgent"/>
 *     &lt;enumeration value="nonstemielective"/>
 *     &lt;enumeration value="nonstemilate"/>
 *     &lt;enumeration value="emergentpci"/>
 *     &lt;enumeration value="electivepci"/>
 *     &lt;enumeration value="outofhospitalarrest"/>
 *     &lt;enumeration value="stagedpci"/>
 *     &lt;enumeration value="complicationpriorpci"/>
 *     &lt;enumeration value="recurrendischaemia"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-TUCO-STEMITYPEvalues")
@XmlEnum
public enum CDTUCOSTEMITYPEvalues {

    @XmlEnumValue("stemipci")
    STEMIPCI("stemipci"),
    @XmlEnumValue("stemirescue")
    STEMIRESCUE("stemirescue"),
    @XmlEnumValue("stemilate")
    STEMILATE("stemilate"),
    @XmlEnumValue("nonstemiurgent")
    NONSTEMIURGENT("nonstemiurgent"),
    @XmlEnumValue("nonstemielective")
    NONSTEMIELECTIVE("nonstemielective"),
    @XmlEnumValue("nonstemilate")
    NONSTEMILATE("nonstemilate"),
    @XmlEnumValue("emergentpci")
    EMERGENTPCI("emergentpci"),
    @XmlEnumValue("electivepci")
    ELECTIVEPCI("electivepci"),
    @XmlEnumValue("outofhospitalarrest")
    OUTOFHOSPITALARREST("outofhospitalarrest"),
    @XmlEnumValue("stagedpci")
    STAGEDPCI("stagedpci"),
    @XmlEnumValue("complicationpriorpci")
    COMPLICATIONPRIORPCI("complicationpriorpci"),
    @XmlEnumValue("recurrendischaemia")
    RECURRENDISCHAEMIA("recurrendischaemia");
    private final String value;

    CDTUCOSTEMITYPEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDTUCOSTEMITYPEvalues fromValue(String v) {
        for (CDTUCOSTEMITYPEvalues c: CDTUCOSTEMITYPEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
