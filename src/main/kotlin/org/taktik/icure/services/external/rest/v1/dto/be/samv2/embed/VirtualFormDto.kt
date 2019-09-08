package org.taktik.icure.services.external.rest.v1.dto.be.samv2.embed

import org.taktik.icure.entities.base.Code

class VirtualFormDto(var name: SamTextDto? = null, var standardForms: List<Code> = listOf()) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as VirtualFormDto

        if (name != other.name) return false
        if (standardForms != other.standardForms) return false

        return true
    }

    override fun hashCode(): Int {
        var result = name?.hashCode() ?: 0
        result = 31 * result + standardForms.hashCode()
        return result
    }
}
