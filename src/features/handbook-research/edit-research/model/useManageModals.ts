import { useModal } from '@/shared/lib'

export const useManageModals = () => {
  const [
    isPathologyModalOpen,
    handleOpenPathologyModal,
    handleClosePathologyModal,
  ] = useModal()

  const [
    isQuestionnaireModalOpen,
    handleOpenQuestionnaireModal,
    handleCloseQuestionnaireModal,
  ] = useModal()

  const [
    isRequiredFieldsModalOpen,
    handleOpenRequiredFieldsModal,
    handleCloseRequiredFieldsModal,
  ] = useModal()

  const [
    isAccessibilityModalOpen,
    handleOpenAccessibilityModal,
    handleCloseAccessibilityModal,
  ] = useModal()

  const [
    isAdditionalFieldsModalOpen,
    handleOpenAdditionalFieldsModal,
    handleCloseAdditionalFieldsModal,
  ] = useModal()

  const [
    isRelatedResearchModalOpen,
    handleOpenRelatedResearchModal,
    handleCloseRelatedResearchModal,
  ] = useModal()

  const [
    isResearchContainersModalOpen,
    handleOpenResearchContainersModal,
    handleCloseResearchContainersModal,
  ] = useModal()

  const [
    isPlacementsModalOpen,
    handleOpenPlacementsModal,
    handleClosePlacementsModal,
  ] = useModal()

  const [
    isResultsTemplateModalOpen,
    handleOpenResultsTemplateModal,
    handleCloseResultsTemplateModal,
  ] = useModal()

  const [
    isResearchPanelsModalOpen,
    handleOpenResearchPanelsModal,
    handleCloseResearchPanelsModal,
  ] = useModal()

  return {
    isPathologyModalOpen,
    handleClosePathologyModal,
    handleOpenPathologyModal,
    isQuestionnaireModalOpen,
    handleCloseQuestionnaireModal,
    handleOpenQuestionnaireModal,
    isRequiredFieldsModalOpen,
    handleCloseRequiredFieldsModal,
    handleOpenRequiredFieldsModal,
    isAccessibilityModalOpen,
    handleCloseAccessibilityModal,
    handleOpenAccessibilityModal,
    isAdditionalFieldsModalOpen,
    handleCloseAdditionalFieldsModal,
    handleOpenAdditionalFieldsModal,
    isRelatedResearchModalOpen,
    handleOpenRelatedResearchModal,
    handleCloseRelatedResearchModal,
    isResearchContainersModalOpen,
    handleOpenResearchContainersModal,
    handleCloseResearchContainersModal,
    isPlacementsModalOpen,
    handleOpenPlacementsModal,
    handleClosePlacementsModal,
    isResultsTemplateModalOpen,
    handleOpenResultsTemplateModal,
    handleCloseResultsTemplateModal,
    isResearchPanelsModalOpen,
    handleOpenResearchPanelsModal,
    handleCloseResearchPanelsModal,
  }
}
