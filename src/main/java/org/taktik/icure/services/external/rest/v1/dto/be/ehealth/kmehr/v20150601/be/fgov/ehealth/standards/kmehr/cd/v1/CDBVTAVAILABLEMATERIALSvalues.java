//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.14 at 03:49:58 PM CEST 
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20150601.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-BVT-AVAILABLEMATERIALSvalues.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-BVT-AVAILABLEMATERIALSvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="cytology"/>
 *     &lt;enumeration value="dna"/>
 *     &lt;enumeration value="rna"/>
 *     &lt;enumeration value="proteins"/>
 *     &lt;enumeration value="correspondingnormaltissue"/>
 *     &lt;enumeration value="tissue"/>
 *     &lt;enumeration value="serum"/>
 *     &lt;enumeration value="plasma"/>
 *     &lt;enumeration value="blood"/>
 *     &lt;enumeration value="urine"/>
 *     &lt;enumeration value="other"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CD-BVT-AVAILABLEMATERIALSvalues")
@XmlEnum
public enum CDBVTAVAILABLEMATERIALSvalues {

    @XmlEnumValue("cytology")
    CYTOLOGY("cytology"),
    @XmlEnumValue("dna")
    DNA("dna"),
    @XmlEnumValue("rna")
    RNA("rna"),
    @XmlEnumValue("proteins")
    PROTEINS("proteins"),
    @XmlEnumValue("correspondingnormaltissue")
    CORRESPONDINGNORMALTISSUE("correspondingnormaltissue"),
    @XmlEnumValue("tissue")
    TISSUE("tissue"),
    @XmlEnumValue("serum")
    SERUM("serum"),
    @XmlEnumValue("plasma")
    PLASMA("plasma"),
    @XmlEnumValue("blood")
    BLOOD("blood"),
    @XmlEnumValue("urine")
    URINE("urine"),
    @XmlEnumValue("other")
    OTHER("other");
    private final String value;

    CDBVTAVAILABLEMATERIALSvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDBVTAVAILABLEMATERIALSvalues fromValue(String v) {
        for (CDBVTAVAILABLEMATERIALSvalues c: CDBVTAVAILABLEMATERIALSvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
