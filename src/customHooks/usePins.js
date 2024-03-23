import useAddPin from './useAddPin';
import useDeletePin from './useDeletePin';
import useGetPins from './useGetPins';

function usePins(postId) {
  // Todo: userId로 변경
  const userId = 2;

  const { pins } = useGetPins(userId);
  const { handleAddPin } = useAddPin();
  const { handleDeletePin } = useDeletePin();

  const pin = pins?.find(({ postId: selectedId }) => String(selectedId) === postId);
  const isContained = !!pin;
  const pinId = pin?.pinId ?? '';

  const handleSetPin = () => (isContained ? handleDeletePin(pinId) : handleAddPin(postId));

  return { handleSetPin, isContained };
}
export default usePins;
